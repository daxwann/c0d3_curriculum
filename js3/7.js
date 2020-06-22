/*
 * write a map function for objects
 * @param {callback} cb
 * @returns {number}
*/

const solution = () => {
  Object.prototype.map = function (cb) {
    return Object.entries(this).reduce((result, entry, i) => {
      const [key, value] = entry;
      result.push(cb(key, value, i));
      return result;
    }, []);
  }
}

module.exports = {
  solution
}
