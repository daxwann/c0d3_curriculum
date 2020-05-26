/**
 * Write a function called solution that
 *   Takes in a function and returns an array.
 *
 * As long as the input function returns false,
 *   array keeps growing with the correspending index value
 * @param {function} fun
 * @returns {array}
 */

const solution = (fun, arr = [], num = 0) => {
  if (fun(num) === false) {
    arr.push(num);
    num++;
    return solution(fun, arr, num);
  }
  return arr;
};

module.exports = {
  solution,
};
