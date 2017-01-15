import {GameOfLifeBoard} from './life/lifeBoard';
import GameOfLifeEvents from './life/lifeEvents';

(function() {
  let width = 10;
  let height = 10;
  let diff = [{x:5,y:3,state:1},{x:6,y:3,state:1},{x:7,y:3,state:1}];
  let game = null;
  let $root = document.querySelector('#app');
  let $start = document.querySelector("#start");
  let $stop = document.querySelector("#stop");
  let $step = document.querySelector("#step");
  let $reset = document.querySelector("#reset");
  let $board = null;
  let evolutionInterval = null;

  $start.addEventListener('click', event =>  {
    if (!game) {
      game = new GameOfLifeBoard(width, height, diff, $root);
    }

    $start.disabled = true;
    $step.disabled = true;
    $stop.disabled = false;
    evolutionInterval = setInterval(() => {
      game.next();
    },500);
  });

  $stop.addEventListener('click', event =>  {
      clearInterval(evolutionInterval);
      $start.disabled = false;
      $step.disabled = false;
      $stop.disabled = true;
  });

  $step.addEventListener('click', event =>  {
    if (!game) {
      game = new GameOfLifeBoard(width, height, diff, $root);
    }
    game.next();
  });

  $reset.addEventListener('click', event =>  {
      clearInterval(evolutionInterval);
      $board.remove();
      $board = null;
      game = new GameOfLifeBoard(width, height, diff, $root);
      $start.disabled = false;
      $step.disabled = false;
      $stop.disabled = true;
  });

  $root.addEventListener(GameOfLifeEvents.BOARD_LOADED.Name, event => {
    $board = $root.querySelector('#gameoflifeboard');

    $board.addEventListener('click', event => {
      //TODO: Handle update of board based on user input
    });
  });

  $start.click();

}());
