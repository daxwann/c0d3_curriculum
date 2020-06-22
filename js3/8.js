/*
 * Write a function that takes in an object and a number (millieseconds).
 * - You must call each function value of the object {"nVal": (k) => {...}}
 * - {"nVal": (k) => {...When this function runs, k is "nVal"...}}
 * @param {object} obj
 * @param {number} num (millieseconds)
 * @call each function value of the object, millieseconds after each other
 */

const solution = (obj, num, i = 0) => {
  const pairs = Object.entries(obj);

  if (i === pairs.length) return;
  const [key, value] = pairs[i];
  value(key);
  setTimeout(() => {
    solution(obj, num, i + 1);
  }, num);
};

module.exports = {
  solution,
};
