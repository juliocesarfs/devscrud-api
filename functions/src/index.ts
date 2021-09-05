const admin = require('firebase-admin')
import * as cors from 'cors'
const serviceAccount = require(
    '../src/config/devs-crud-alest-firebase-adminsdk-sfz2p-cb15d89b00.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

import * as express from 'express'
import * as functions from 'firebase-functions'
import {
  developerController,
} from './controllers/developers/DeveloperController'

const appDevelopers = express()
appDevelopers.use(cors({ origin: true }))

/** ROTA - DEVELOPERS */
appDevelopers.get('/:idDeveloper', async (req, res) => {
  const idDeveloper = req.params.idDeveloper

  return res.json(await developerController.getDeveloperById(idDeveloper))
})

appDevelopers.post('/filter', async (req, res) => {
  return res.json(
      await developerController.getDevelopersByName(req.body.filter))
})

appDevelopers.delete('/:idDeveloper', async (req, res) => {
  const idDeveloper = req.params.idDeveloper
  return res.json(await developerController.deleteDevelopers(idDeveloper))
})

appDevelopers.route('/')
    .get(async (req, res) => {
      return res.json(await developerController.getDevelopers())
    })
    .post(async (req, res) => {
      return res.json(await developerController.createDevelopers(req.body))
    })
    .put(async (req, res) => {
      return res.json(await developerController.updateDevelopers(req.body))
    })


/** EXPORT APPS */
exports.developers = functions.https.onRequest(appDevelopers)


