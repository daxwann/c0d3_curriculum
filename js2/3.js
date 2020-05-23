/**
 * Write a function called solution that
 *   Takes in 2 numbers and
 *   returns an array with the length equal to the first input number.
 *     Every element in the returned array is an array,
 *        with length equal to  the second input number.
 *     All values in the array is 0.
 * @param {number} row
 * @param {number} col
 * @returns {array}
 */

const solution = (row, col) => {
  if (row !== null && row <= 0) {
    return [];
  }

  if (row === null && col > 0) {
    return [...solution(null, col - 1), 0];
  }
  
  if (row === null && col <= 0) {
    return [];
  }

  return [...solution(row - 1, col), solution(null, col)];
}

module.exports = {
  solution
}
