/**
 * Write a function called solution that
 *   Takes in a function and returns an array.
 *
 * As long as the input function returns false,
 *   array keeps growing with the correspending index value
 * @param {function} fun
 * @returns {array}
 */

const solution = (fun, num = 0) => {
  if (fun(num)) {
    return [];
  }
  
  return [num, ...solution(fun, num + 1)]
}

module.exports = {
  solution
}
