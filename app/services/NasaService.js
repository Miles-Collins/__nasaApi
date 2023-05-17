import { AppState } from "../AppState.js"
import { NasaPicture } from "../models/NasaPicture.js"
import { nasa } from "./AxiosService.js"

class NasaService {

async gettingDate(dateData) {
  const res = await nasa.get(`?date=${dateData}`)
  console.log('GETTING DATE', res.data)
  AppState.nasaPicture = new NasaPicture(res.data)
}

  async get() {
  const res = await nasa.get()
  console.log('Raw Data', res.data)
  console.log('New Data', new NasaPicture(res.data))
  AppState.nasaPicture = new NasaPicture(res.data)
  console.log('AppState picture', AppState.nasaPicture);
}

async getAll() {
  const res = await nasa.get('?start_date=2012-12-12&end_date=2012-12-23')
  console.log('Array', res.data.map(n => new NasaPicture(n)))
}

}

export const nasaService = new NasaService()