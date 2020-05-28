/**
 * Replicate Array.prototype.reduce and call it cReduce
 * Documentation:
 *     Replicate Array.prototype.reduce and call it cReduce
 */

const solution = () => {
  Array.prototype.cReduce = function (cb, accumulator = 0, i = 0) {
    if (i === this.length) return accumulator
    accumulator = cb(accumulator, this[i], i, this);
    return this.cReduce(cb, accumulator, i + 1);
  };
};

module.exports = {
  solution,
};
