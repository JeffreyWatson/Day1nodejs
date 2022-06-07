import { playersService } from "../services/PlayersService"
import BaseController from "../utils/BaseController"
import { logger } from "../utils/Logger"


export class PlayersController extends BaseController {
  constructor() {
    super('api/players')
    this.router
      .get('', this.getPlayers)
      .post('', this.createPlayer)
      .delete('/:name', this.deletePlayer)
  }

  async getPlayers(req, res, next) {
    try {
      let players = await playersService.getPlayers()
      return res.send(players);
    } catch (error) {
      next(error);
    }
  }

  async createPlayer(req, res, next) {
    try {
      let player = await playersService.createPlayer(req.body)
      return res.send(player)
    } catch (error) {
      next(error)
    }
  }

  async deletePlayer(req, res, next) {
    try {
      logger.log(req.params.name)
      let message = await playersService.deletePlayer(req.params.name)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }

}