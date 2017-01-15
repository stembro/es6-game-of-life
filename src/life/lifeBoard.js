import * as GameOfLife from './lifeGame';
import GameOfLifeEvents from './lifeEvents';

const s_game = Symbol();
const s_board = Symbol();
const s_iter = Symbol();
const s_root = Symbol();

export class GameOfLifeBoard {
  constructor(width, height, diff, domRoot) {
    this[s_game] = new GameOfLife.Game(width, height, diff);
    this[s_board] = this[s_game].board;
    this[s_root] = domRoot;

    for (let y = 0; y < this[s_game].height; y++) {
      for (let x = 0; x < this[s_game].width; x++) {
        this[s_board][y][x] = buildNode(x,y, this[s_board][y][x]);
      }
    }
    appendBoard(this[s_board], domRoot);
    domRoot.dispatchEvent(GameOfLifeEvents.BOARD_LOADED.EventObject);
    this[s_iter] = this[s_game].start();
  }

  toggleCell(x,y) {
    this[s_game].toggleCell(x,y) === GameOfLife.CELL_ALIVE ? this[s_board][y][x].classList.add('alive') : this[s_board][y][x].classList.remove('alive');
  }

  next() {
    let diff = this[s_iter].next().value;

    if (diff === undefined) {
      this[s_root].dispatchEvent(GameOfLifeEvents.BOARD_STABILIZED.EventObject);
      return;
    }

    diff.forEach((change) => {
      let x = change.x;
      let y = change.y;
      change.state === GameOfLife.CELL_ALIVE ? this[s_board][y][x].classList.add('alive') : this[s_board][y][x].classList.remove('alive');
    });
  }
}

const buildNode = (x,y,isAlive) => {
  let node = document.createElement('div');
  node.classList.add('cell');
  isAlive && node.classList.add('alive');
  node.setAttribute('data-coord-x',x);
  node.setAttribute('data-coord-y',y);
  return node;
};

const appendBoard = (board, domRoot) => {
  let fragment = document.createDocumentFragment();
  let table = document.createElement('table');
  table.id = 'gameoflifeboard';
  for (let y = 0; y < board.length; y++) {
    let row = document.createElement('tr');
    for (let x = 0; x < board[y].length; x++) {
      let cell = document.createElement('td');
      cell.appendChild(board[y][x]);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  fragment.appendChild(table);
  domRoot.appendChild(fragment);
};




