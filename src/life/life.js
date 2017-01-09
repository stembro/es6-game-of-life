import ArrayUtils from '../utils/array';

const CELL_DEAD = 0;
const CELL_ALIVE = 1;

function countLivingNeighbors(board, x, y) {
  let height = board.length;
  let width = board[0].length;
  let count = 0;
  for(let dy = -1; dy < 2; dy++) {
		for(let dx = -1; dx < 2; dx++) {
      let xdx = x + dx;
      let ydy = y + dy;
      if(xdx < 0 || ydy < 0 || xdx >= width || ydy >= height) {
        continue;
      }
      if(board[ydy][xdx] === CELL_ALIVE) {
        ++count;
      }
    }
  }
  return count;
}

export default class GameOfLife {
  constructor(board) {
    this.board = ArrayUtils.clone2dArray(board);
  }

  *evolve() {
    let isTrue = true;
    while (isTrue) {
      let diff = {};
      let height = this.board.length;
      let width = this.board[0].length;
      this.previousBoard = ArrayUtils.clone2dArray(this.board);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let livingNeighborCount = countLivingNeighbors(this.previousBoard, x, y);
          debugger;
          let isAlive = !!this.board[y][x];

          if (isAlive) {
            if (livingNeighborCount < 2 || livingNeighborCount > 3) {
              this.board[y][x] = CELL_DEAD;
              diff[`r${x}c${y}`] = CELL_DEAD;
            }
          } else {
            if (livingNeighborCount === 3) {
              this.board[y][x] = CELL_ALIVE;
              diff[`r${x}c${y}`] = CELL_ALIVE;
            }
          }
        }
      }

      yield {
        board: this.board,
        diff: diff
      };
    }
  }

  toString(rowSep = '\n', colSep = ' ') {
    return this.board.map(arr => arr.join(colSep)).join(rowSep);
  }
}
