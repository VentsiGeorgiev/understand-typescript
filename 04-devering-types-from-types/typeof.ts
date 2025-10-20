const settings = {
  difficulty: 'easy',
  minLevel: 10,
  didStart: false,
  players: ['John', 'Jane']
}
type GameSettings = typeof settings

function loadGame(settings: GameSettings) {
  // ...
}
loadGame(settings)