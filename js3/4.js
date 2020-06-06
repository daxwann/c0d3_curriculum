/*
 * 2sum: write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number. (No duplicates)
 * @param {array} arr
 * @param {number} num
 * @returns {boolean}
 */

const solution = (arr, num) => {
  const pairs = {};
  const result = arr.find(n1 => {
    if (pairs.hasOwnProperty(n1)) return true;
    pairs[num - n1] = n1;
    return false;
  })
  return result !== undefined;
}

module.exports = {
  solution
}
