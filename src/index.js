import {GameOfLifeBoard} from './life/lifeBoard';
import GameOfLifeEvents from './life/lifeEvents';
import * as QueryStringHelper from './utils/querystring';
import style from './style.css';

(function() {
  let $root = document.querySelector('#app');
  let $start = document.querySelector("#start");
  let $stop = document.querySelector("#stop");
  let $step = document.querySelector("#step");
  let $reset = document.querySelector("#reset");
  let $gpm = document.querySelector("#generationsPerMinute");
  let $randomized = document.querySelector("#randomized");
  let $board = null;
  let evolutionInterval = null;

  let defaults = {
    width: 100,
    height: 40,
    diff: $randomized.checked ? getRandomDiff(function(){return this.width;}, function(){return this.height;}) : [],
    running: false,
    generationsPerMinute: 120,
    randomize: $randomized.checked
  };

  let qsParams = QueryStringHelper.getParams(window.location.search);

  if (Number.isInteger(+qsParams.w) && +qsParams.w > 0 && +qsParams.w <= 1000) {
    defaults.width = +qsParams.w;
  }

  if (Number.isInteger(+qsParams.h) && +qsParams.h > 0 && +qsParams.h <= 1000) {
    defaults.height = +qsParams.h;
  }

  if (Number.isInteger(+qsParams.gpm) && +qsParams.gpm >= +$gpm.min && +qsParams.gpm <= +$gpm.max) {
    defaults.generationsPerMinute = +qsParams.gpm;
  }

  if (qsParams.r !== undefined) {
    defaults.running = !!qsParams.r;
  }

  if (qsParams.d) {
    if (qsParams.d === 'r') {
      if (!$randomized.checked) {
        defaults.randomize = true;
        defaults.diff = getRandomDiff(defaults.width, defaults.height);
      }
    } else {
      defaults.randomize = false;
      defaults.diff = getQueryStringDiff(qsParams.d);
    }
  }

  let values = JSON.parse(JSON.stringify(defaults));

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

  function getQueryStringDiff(qsDiff) {
    let diff = [];
    let coordinatePairs = qsDiff.split(';');
    coordinatePairs.forEach(pair => {
      let [x,y] = pair.split(',');
      diff.push({
        x: x,
        y: y,
        state: 1
      });
    });
    return diff;
  }

  $start.addEventListener('click', event =>  {
    $start.disabled = true;
    $step.disabled = true;
    $stop.disabled = false;
    values.running = true;
    evolutionInterval = setInterval(() => {
      game.next();
    },1000*(60/values.generationsPerMinute));
  });

  $stop.addEventListener('click', event =>  {
      clearInterval(evolutionInterval);
      values.running = false;
      $start.disabled = false;
      $step.disabled = false;
      $stop.disabled = true;
  });

  $step.addEventListener('click', event =>  {
    game.next();
  });

  $reset.addEventListener('click', event =>  {
      values.diff = $randomized.checked ? getRandomDiff(values.width, values.height) : [];
      clearInterval(evolutionInterval);
      values.running = false;
      $board.remove();
      $board = null;
      game = new GameOfLifeBoard(values.width, values.height, values.diff, $root);
      $start.disabled = false;
      $step.disabled = false;
      $stop.disabled = true;
  });

  $root.addEventListener(GameOfLifeEvents.BOARD_LOADED.Name, event => {
    $board = $root.querySelector('#gameoflifeboard');

    $board.addEventListener('click', event => {
      if (values.running) {
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
    values.running = false;
    $start.disabled = true;
    $step.disabled = true;
    $stop.disabled = true;
    alert("Board has stabilized!");
  });

  $gpm.addEventListener('change', event => {
    values.generationsPerMinute = +event.target.value;
    $stop.click();
    $start.click();
  });

  let game = new GameOfLifeBoard(values.width, values.height, values.diff, $root);

  $gpm.value = values.generationsPerMinute;
  $randomized.checked = values.randomize;

  if (values.running) {
    $start.click();
  }

}());
