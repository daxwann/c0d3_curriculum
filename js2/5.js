/**
 * Write a function called solution that
 *   Takes in an array of functions and a number,
 *   and calls every function input milliseconds later
 * @param {array} arr
 * @param {number} time
 */

const solution = (arr, time, i = 0) => {
   setTimeout(() => {
    if (i < arr.length) arr[i].call();
    if (i < arr.length - 1) solution(arr, 0, i + 1);
  }, time)
}

module.exports = {
  solution
}
