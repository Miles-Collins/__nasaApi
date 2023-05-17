import { AppState } from "../AppState.js"
import { SandboxPicture } from "../models/SandboxPicture.js"
import { api } from "./AxiosService.js"

class SandboxService{

async favorite() {
  const picture = AppState.nasaPicture
  console.log(picture)
  const res = await api.post('api/apods', picture)
  console.log('Favorite', new SandboxPicture(res.data))
  AppState.favorites = AppState.favorites.push(new SandboxPicture(res.data))
}

async getMyFavorites() {
  const res = await api.get('api/apods')
  console.log('All apods', res.data.map(f => new SandboxPicture(f)))
  AppState.favorites = res.data.map(f => new SandboxPicture(f))
}

}

export const sandBoxService = new SandboxService()