import { AppState } from "../AppState.js"
import { sandBoxService } from "../services/SandboxService.js"
import { logger } from "../utils/Logger.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawFavorites() {
  let template = ''
  console.log(AppState.favorites, 'ARRAY?')  
  AppState.favorites.forEach(f => template += f.FavoritePicture)
  setHTML('favoritePictures', template)
}

export class SandboxController {
  constructor() {
    AppState.on('account', this.getMyFavorites)
    AppState.on('favorites', _drawFavorites)
  }

  async favorite() {
    try {
      await sandBoxService.favorite()
    } catch (error) {
      logger.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }

  async getMyFavorites() {
    try {
      await sandBoxService.getMyFavorites()
    } catch (error) {
      logger.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }

  async removeFavorite(favoriteId) {
    try {
      const yes = await Pop.confirm('Are you sure you want to remove this Favorite?')

      if(!yes) {
        return
      }
      await sandBoxService.removeFavorite(favoriteId)
    } catch (error) {
      logger.error('[ERROR]',error)
      Pop.error(('[ERROR]'), error.message)
    }
  }

  
}