/**
 * Write a function called solution that
 *   takes in a number
 *   and returns true if the number is a prime number
 *   false otherwise
 * @param {number} num
 * @returns {boolean}
 */

const solution = (num, i = 2) => {
  // number less than 2 are not prime
  if (num <= 1) return false

  // even number greater than 2 are not prime
  if (num % 2 === 0 && num != i) return false

  // switch to only odd numbers
  if (i % 2 === 0) i++;

  // if num divisible by an odd number is not prime
  if (num % i === 0 && num != i) return false

  // if i passes half of num without being a divisor of num, then num is prime
  if (i > Math.ceil(num / 2)) return true

  // recurse to next odd number
  return solution(num, i + 2);
}

module.exports = {
  solution
}
