import * as admin from 'firebase-admin'
const db = admin.firestore()

import { Developer } from '../../interfaces/developers/Developer'
import { Message } from '../../interfaces/utils/Message'
import { messageBusiness } from '../../business/utils/MessageBusiness'

const collection = db.collection('developers')

class DataSourceDeveloper {
  getDeveloperById = async (idDeveloper: string): Promise<Message> => {
    return await collection
        .doc(idDeveloper)
        .get()
        .then(async (result) => {
          if (!result.exists) {
            return messageBusiness.info('Developer não encontrado')
          }

          const developer = {
            ...result.data(),
            id: idDeveloper,
          }
          return messageBusiness.sucess('Developer encontrado', developer)
        })
        .catch((error) => {
          return messageBusiness.error('Erro ao buscar developer', error)
        })
  }

  getDevelopersByName = async (nameDeveloper: string): Promise<Message> => {
    const developers: Array<Developer> = []
    return await collection.where('name', '==', nameDeveloper)
        .get()
        .then(async (querySnapshot) => {
          if (querySnapshot.empty) {
            return messageBusiness.info('Nenhum developer encontrado')
          }

          let developer: Developer
          querySnapshot.forEach((doc) => {
            developer = {
              ...<Developer>doc.data(),
              id: doc.id,
            }

            developers.push(developer)
          })

          return messageBusiness.sucess('Developers retornados', developers)
        })
  }

  getDevelopers = async (): Promise<Message> => {
    const developers: Array<Developer> = []
    return await collection.get()
        .then(async (snapshot) => {
          if (snapshot.empty) {
            return messageBusiness.info('Nenhum developer encontrado')
          }

          let developer: Developer
          snapshot.forEach((doc) => {
            developer = {
              ...<Developer>doc.data(),
              id: doc.id,
            }

            developers.push(developer)
          })

          return messageBusiness.sucess('Developers retornados', developers)
        })
        .catch((error) => {
          return messageBusiness.error('Erro ao buscar developers', error)
        })
  }

  createDevelopers = async (developer: Developer): Promise<Message> => {
    return await collection
        .doc()
        .set(developer)
        .then(async (result) => {
          return messageBusiness.sucess('Developer incluido', result)
        })
  }

  updateDevelopers = async (developer: Developer): Promise<Message> => {
    return await collection
        .doc(developer.id)
        .set(developer)
        .then(async (result) => {
          return messageBusiness.sucess('Developer alterado', result)
        })
  }

  deleteDevelopers = async (idDeveloper: string): Promise<Message> => {
    return await collection
        .doc(idDeveloper)
        .delete()
        .then(async () => {
          return messageBusiness.sucess(
              `Developer com id ${idDeveloper} deletado`
          )
        }).catch((error) => {
          return messageBusiness.error('Erro ao deletar developer', error)
        })
  }
}

export const dataSourceDeveloper = new DataSourceDeveloper()
