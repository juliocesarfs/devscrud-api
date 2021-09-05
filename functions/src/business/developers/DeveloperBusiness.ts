import { Developer } from './../../interfaces/developers/Developer'
import {
  dataSourceDeveloper,
} from '../../datasource/developers/DataSourceDeveloper'
import { messageBusiness } from '../utils/MessageBusiness'

class DeveloperBusiness {
  getDeveloperById = (idDeveloper: string) => {
    return dataSourceDeveloper.getDeveloperById(idDeveloper)
  }

  getDevelopersByName = (nameDeveloper: string) => {
    return dataSourceDeveloper.getDevelopersByName(nameDeveloper)
  }

  getDevelopers = () => {
    return dataSourceDeveloper.getDevelopers()
  }

  createDevelopers = (developer: Developer) => {
    return dataSourceDeveloper.createDevelopers(developer)
  }

  updateDevelopers = (developer: Developer) => {
    if (developer.name != null &&
      developer.imageUrl != null &&
      developer.about != null) {
      return dataSourceDeveloper.updateDevelopers(developer)
    }
    return messageBusiness.info('Porfavor, preencha todos os campos', 250)
  }

  deleteDevelopers = (idDeveloper: string) => {
    return dataSourceDeveloper.deleteDevelopers(idDeveloper)
  }
}

export const developerBusiness = new DeveloperBusiness()
