'use strict';
import Popup from './popup.js';
import Game from './game.js';

const gameFinishBanner = new Popup();
gameFinishBanner.setClickListener(() => {
  game.start();
});

const game = new Game(5, 5, 5);
game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch(reason){
    case 'cancel':
      message = 'Replay?';
      break;
    case 'win':
      message = 'YOU WON';
      break;
    case 'lose':
      message = 'YOU LOST';
      break;
    default:
      throw new Error('not valid reason'); 
  }
  gameFinishBanner.showWithText(message);
})

