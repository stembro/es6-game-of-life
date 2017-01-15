import {GameOfLifeBoard} from './life/lifeBoard';
import GameOfLifeEvents from './life/lifeEvents';

(function() {
  let width = 100;
  let height = 40;
  let diff = getRandomDiff(width,height);
  let $root = document.querySelector('#app');
  let $start = document.querySelector("#start");
  let $stop = document.querySelector("#stop");
  let $step = document.querySelector("#step");
  let $reset = document.querySelector("#reset");
  let $gpm = document.querySelector("#generationsPerMinute");
  let $board = null;
  let evolutionInterval = null;
  let running = false;
  let generationsPerMinute = 120;

  function getRandomDiff(w, h) {
    let totalCellsToActivate = Math.floor(Math.random() * w*h);
    let diff = [];
    while (totalCellsToActivate > 0) {
      let randomX = Math.floor(Math.random()*w);
      let randomY = Math.floor(Math.random()*h);
      diff.push({x:randomX,y:randomY,state:1});
      totalCellsToActivate--;
    }
    return diff;
  }

  $start.addEventListener('click', event =>  {
    $start.disabled = true;
    $step.disabled = true;
    $stop.disabled = false;
    running = true;
    evolutionInterval = setInterval(() => {
      game.next();
    },1000*(60/generationsPerMinute));
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
      game = new GameOfLifeBoard(width, height, getRandomDiff(width, height), $root);
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

  $gpm.addEventListener('change', event => {
    generationsPerMinute = +event.target.value;
    $stop.click();
    $start.click();
  });


  let game = new GameOfLifeBoard(width, height, diff, $root);

}());
