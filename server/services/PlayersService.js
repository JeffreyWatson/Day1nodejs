


let playerDb = {
  Players: [
    { name: 'AllenIverson', position: 'pg' },
    { name: 'JrSmith', position: 'sg' },
    { name: 'CarmeloAnthony', position: 'sf' },
    { name: 'KenyonMartin', position: 'pf' },
    { name: 'NikolaJokic', position: 'c' },
  ]
}


class PlayersService {

  async getPlayers() {
    return playerDb.Players
  }

  createPlayer(playerData) {
    playerDb.Players.push(playerData)
    return playerData
  }

  async deletePlayer(name) {
    playerDb.Players = playerDb.Players.filter(p => p.name != name)
    return 'player has been injured'
  }

}


export const playersService = new PlayersService()