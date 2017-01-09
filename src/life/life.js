import ArrayUtils from '../utils/array';

const CELL_DEAD = 0;
const CELL_ALIVE = 1;

function countNeighbors(board, x, y) {
  let height = board.length;
  let width = board[0].length;
  let count = 0;

  for(let dy = -1; dy < 2; dy++) {
		for(let dx = -1; dx < 2; dx++) {
      let xdx = x + dx;
      let ydy = y + dy;
      if((dx === 0 && dy === 0) ||
         (xdx < 0 || ydy < 0) ||
         (xdx >= width || ydy >= height)) {
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

  *evolutions() {
    let isTrue = true;
    while (isTrue) {
      let diff = [];
      let height = this.board.length;
      let width = this.board[0].length;
      this.previousBoard = ArrayUtils.clone2dArray(this.board);

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let neighbors = countNeighbors(this.previousBoard, x, y);
          let alive = !!this.board[y][x];

          if (alive) {
            if (neighbors < 2 || neighbors > 3) {
              this.board[y][x] = CELL_DEAD;
            }
          } else {
            if (neighbors === 3) {
              this.board[y][x] = CELL_ALIVE;
            }
          }

          if (this.board[y][x] !== this.previousBoard[y][x]) {
            diff.push({
              x: x,
              y: y,
              selector: `row${x}col${y}`,
              state: this.board[y][x]
            });
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
