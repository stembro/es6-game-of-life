import GameOfLife from './life/life';

(function() {
  let board = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ];

  let game = new GameOfLife(board);

  let evolutionInterval = setInterval(() => {
    document.querySelector('#app').innerHTML = game.toString('<br>');
    let diff = game.evolve().next().value.diff;
    if(Object.getOwnPropertyNames(diff).length === 0) {
      clearInterval(evolutionInterval);
    } else {
      console.log(diff);
    }
  },1000);

}());
