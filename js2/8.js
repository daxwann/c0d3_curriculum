/**
 * Replicate Array.prototype.map function and call it cMap
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_map.asp
 */

const solution = () => {
  Array.prototype.cMap = function (cb, newArr = [], i = 0) {
    if (this[i] !== undefined) newArr.push(cb(this[i], i, this));
    if (this[i + 1] !== undefined) return this.cMap(cb, newArr, i + 1);
    return newArr;
  }
}

module.exports = {
  solution
}
