import { AppState } from "../AppState.js"
import { SandboxPicture } from "../models/SandboxPicture.js"
import { api } from "./AxiosService.js"

class SandboxService{

async favorite() {
  const picture = AppState.nasaPicture
  console.log(picture)
  const res = await api.post('api/apods', picture)
  console.log('Favorite', new SandboxPicture(res.data))
  AppState.favorites.push(new SandboxPicture(res.data))
  AppState.emit('favorites')
}

async getMyFavorites() {
  const res = await api.get('api/apods')
  console.log('All apods', res.data.map(f => new SandboxPicture(f)))
  AppState.favorites = res.data.map(f => new SandboxPicture(f))
}

async removeFavorite(favoriteId) {
  const res = await api.delete(`api/apods/${favoriteId}`)
  console.log(res.data)
  AppState.favorites = AppState.favorites.filter(f => f.id != favoriteId)
}

}

export const sandBoxService = new SandboxService()