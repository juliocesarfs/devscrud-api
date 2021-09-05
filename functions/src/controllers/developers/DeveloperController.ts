import { Developer } from './../../interfaces/developers/Developer'
import { developerBusiness } from '../../business/developers/DeveloperBusiness'

class DeveloperController {
  getDeveloperById = (idDeveloper: string) => {
    return developerBusiness.getDeveloperById(idDeveloper)
  }

  getDevelopersByName = (nameDeveloper: string) => {
    return developerBusiness.getDevelopersByName(nameDeveloper)
  }

  getDevelopers = () => {
    return developerBusiness.getDevelopers()
  }

  createDevelopers = (developer: Developer) => {
    return developerBusiness.createDevelopers(developer)
  }

  updateDevelopers = (developer: Developer) => {
    return developerBusiness.updateDevelopers(developer)
  }

  deleteDevelopers = (idDeveloper: string) => {
    return developerBusiness.deleteDevelopers(idDeveloper)
  }
}

export const developerController = new DeveloperController()
