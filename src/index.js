import {GameOfLifeBoard} from './life/lifeBoard';
import GameOfLifeEvents from './life/lifeEvents';

(function() {
  let width = 10;
  let height = 10;
  let diff = [{x:5,y:3,state:1},{x:6,y:3,state:1},{x:7,y:3,state:1}];
  let root = document.querySelector('#app');

  root.addEventListener(GameOfLifeEvents.BOARD_LOADED.Name, event => {
    document.querySelector("#start").addEventListener('click', event =>  {

    });

    document.querySelector("#stop").addEventListener('click', event =>  {

    });

    document.querySelector("#step").addEventListener('click', event =>  {
      game.next();
    });

    document.querySelector("#reset").addEventListener('click', event =>  {

    });

    root.querySelector('#gameoflifeboard').addEventListener('click', event => {

    });
  });

  let game = new GameOfLifeBoard(width,height,diff, root);
}());
