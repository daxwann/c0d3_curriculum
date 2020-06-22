/*
 * write a function that takes in an array of numbers, and returns a new array of all duplicate numbers
 * @param {array} arr
 * @returns {array}
*/

const solution = (arr) => { 
  const dups = arr.reduce((dups, num) => {
    if (dups.hasOwnProperty(num)) {
      dups[num]++;
    } else {
      dups[num] = 1;
    }

    return dups;
  }, {});

  return Object.keys(dups).filter(key => dups[key] > 1).map(key => +key);
}

module.exports = {
  solution
}
