export default {
  BOARD_LOADED: {
    Name: 'board-loaded',
    EventObject: new CustomEvent('board-loaded', {bubbles: true, cancelable: true})
  }
};
