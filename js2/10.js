/**
 * Replicate Array.prototype.filter and call it cFilter
 * Documentation:
 *     https://www.w3schools.com/jsref/jsref_filter.asp
 */

const solution = () => {
  Array.prototype.cFilter = function (cb, newArr = [], i = 0) {
    if (this[i] !== undefined && cb(this[i], i, this)) newArr.push(this[i]);
    if (this[i + 1] !== undefined) return this.cFilter(cb, newArr, i + 1);
    return newArr;
  }
}

module.exports = {
  solution
}
