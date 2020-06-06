/**
 * takes in 2 integers, create 2d array of objects. First integer represents how many nested arrays within the array. Second integer represents how many objects within each array.
 * solution(4,2)
 * returns:
 * [
    [{x: 0, y: 0}, {x: 1, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}],
    [{x: 0, y: 3}, {x: 1, y: 3}],
  ]
 * @param {integer} num1 {integer} num2
 * @return {array} arr
 */

const solution = (num1, num2, y = 0, matrix = []) => {
  if (y === num1) return matrix;
  matrix.push(createRow(num2, y));
  return solution(num1, num2, y + 1, matrix);
}

const createRow = (num2, y, x = 0, row = []) => {
  if (x === num2) return row;
  row.push({x, y});
  return createRow(num2, y, x + 1, row);
}

module.exports = {
  solution
}
