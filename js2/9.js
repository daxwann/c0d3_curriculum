/**
 * Replicate Array.prototype.reduce and call it cReduce
 * Documentation:
 *     Replicate Array.prototype.reduce and call it cReduce
 */

const solution = () => {
  Array.prototype.cReduce = function (cb, accumulator = 0, i = 0) {
    if (this[i] !== undefined) accumulator = cb(accumulator, this[i], i, this);
    if (this[i + 1] !== undefined) return this.cReduce(cb, accumulator, i + 1);
    return accumulator;
  }
}

module.exports = {
  solution
}
