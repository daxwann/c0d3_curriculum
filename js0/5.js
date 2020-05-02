/**
 * Write a function called solution that
 * Takes in 3 numbers, return the largest
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @returns {number}
 */

const solution = (num1, num2, num3) => {
  const maxOf1And2 = num1 >= num2 ? num1 : num2
  return maxOf1And2 >= num3 ? maxOf1And2 : num3
}

module.exports = {
  solution
}
