/**
 * given arr of strings (keys) and an object, return an array of values.
 * @param {array} arr {object} obj
 * @returns {array} arr
 */

const solution = (arr, obj) => {
  const values = [];

  arr.forEach(key => {
    if (obj.hasOwnProperty(key)) values.push(obj[key]);
  })

  return values; 
}

module.exports = {
  solution
}
