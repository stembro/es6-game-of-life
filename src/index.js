import {GameOfLifeBoard} from './life/lifeBoard';
import GameOfLifeEvents from './life/lifeEvents';

(function() {
  let width = 10;
  let height = 10;
  let diff = [{x:5,y:3,state:1},{x:6,y:3,state:1},{x:7,y:3,state:1}];
  let $root = document.querySelector('#app');
  let $start = document.querySelector("#start");
  let $stop = document.querySelector("#stop");
  let $step = document.querySelector("#step");
  let $reset = document.querySelector("#reset");
  let $board = null;
  let evolutionInterval = null;
  let running = false;

  $start.addEventListener('click', event =>  {
    $start.disabled = true;
    $step.disabled = true;
    $stop.disabled = false;
    running = true;
    evolutionInterval = setInterval(() => {
      game.next();
    },500);
  });

  $stop.addEventListener('click', event =>  {
      clearInterval(evolutionInterval);
      running = false;
      $start.disabled = false;
      $step.disabled = false;
      $stop.disabled = true;
  });

  $step.addEventListener('click', event =>  {
    game.next();
  });

  $reset.addEventListener('click', event =>  {
      clearInterval(evolutionInterval);
      running = false;
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
      if (running) {
        return;
      }

      let x = event.path[0].getAttribute('data-coord-x');
      let y = event.path[0].getAttribute('data-coord-y');

      if (x === null || y === null) {
        return;
      }

      game.toggleCell(x,y);
    });
  });

  $root.addEventListener(GameOfLifeEvents.BOARD_STABILIZED.Name, event => {
    clearInterval(evolutionInterval);
    running = false;
    $start.disabled = true;
    $step.disabled = true;
    $stop.disabled = true;
    alert("Board has stabilized!");
  });

  let game = new GameOfLifeBoard(width, height, diff, $root);

}());
