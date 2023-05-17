import { AppState } from "../AppState.js";
import { nasa } from "../services/AxiosService.js";
import { nasaService } from "../services/NasaService.js";
import { logger } from "../utils/Logger.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";

function _drawNasaPicture() {
  let picture = AppState.nasaPicture
  document.body.style.backgroundImage = `url(${picture.imgUrl})`
  setHTML('picture', picture.DetailsTemplate)
}

export class NasaController {


  constructor() {
    console.log('Hello from the Nasa Controller!!!!')
    AppState.on('nasaPicture', _drawNasaPicture)
    this.getAPOD()
    this.getAll()
  }

  async getDate() {
    try {
      console.log('getting date')
      let dateElem = document.getElementById('date')
      console.log(dateElem.value)
      let dateData = dateElem.value
      await nasaService.gettingDate(dateData)
    } catch (error) {
      logger.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }

  async getAPOD() {
    try {
      await nasaService.get();
    } catch (error) {
      logger.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }

  async getAll() {
    try {
      await nasaService.getAll()
    } catch (error) {
      logger.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }
}