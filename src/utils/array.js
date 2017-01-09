let ArrayUtils = (function() {

  function clone2dArray(array) {
    return array.slice().map(arr => arr.slice());
  }

  function initialize2dArray(width, height, initialValue) {
    let arr = [];
    for(let y = 0; y < height; y++) {
      arr[y] = new Array(width).fill(initialValue);
    }
    return arr;
  }

  return {
    clone2dArray: clone2dArray,
    initialize2dArray: initialize2dArray
  };

}());

export default ArrayUtils;
