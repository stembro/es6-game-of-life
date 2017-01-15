import ArrayUtils from '../utils/array';

export const CELL_DEAD = 0;
export const CELL_ALIVE = 1;

const s_width = Symbol();
const s_height = Symbol();
const s_board = Symbol();

export class Game {
  constructor(width, height, diff) {
    if (width <= 0 || height <= 0) {
      throw "Error: Board must be at least 1x1.";
    }
    this[s_width] = width;
    this[s_height] = height;
    this[s_board] = getBoardFromDiff(width, height, diff);
  }

  get width() {
    return this[s_width];
  }

  get height() {
    return this[s_height];
  }

  get board() {
    return ArrayUtils.clone2dArray(this[s_board]);
  }

  *start() {
    let isTrue = true;
    if (this.height === 0 || this.width === 0) {
      throw "Error: Game has not been initialized.";
    }

    while (isTrue) {
      let diff = [];
      const previousBoard = this.board;

      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          let neighbors = countNeighbors(previousBoard, x, y);
          let alive = !!this[s_board][y][x];

          if (alive) {
            if (neighbors < 2 || neighbors > 3) {
              this[s_board][y][x] = CELL_DEAD;
            }
          } else {
            if (neighbors === 3) {
              this[s_board][y][x] = CELL_ALIVE;
            }
          }

          if (this[s_board][y][x] !== previousBoard[y][x]) {
            diff.push({x: x, y: y, state: this[s_board][y][x]});
          }
        }
      }

      if (diff.length > 0) {
        yield diff;
      } else {
        return;
      }
    }
  }

  toString(rowSep = '\n', colSep = ' ') {
    return this.board.map(arr => arr.join(colSep)).join(rowSep);
  }
}

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

function getBoardFromDiff(width, height, diff) {
    let board = ArrayUtils.initialize2dArray(width, height, CELL_DEAD);
    diff.forEach(function(value) {
      if (value.x > 0 && value.x < width && value.y > 0 && value.y < height) {
        board[value.y][value.x] = value.state;
      }
    });
    return board;
}
