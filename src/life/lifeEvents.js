export default {
  BOARD_LOADED: {
    Name: 'board-loaded',
    EventObject: new CustomEvent('board-loaded', {bubbles: true, cancelable: true})
  },
  BOARD_STABILIZED: {
    Name: 'board-stabilized',
    EventObject: new CustomEvent('board-stabilized', {bubbles: true, cancelable: true})
  }
};
