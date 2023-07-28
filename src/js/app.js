import GameSavingLoader from './game-saving-loader';

GameSavingLoader.load()
  .then((saving) => saving !== true)
  .catch((error) => console.error(error));
