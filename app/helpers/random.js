const random = {
  /**
   * returns a random integer between min and max, included
   *
   * @param {number} min - the min number
   * @param {number} max - the max number
   * @returns {number}
   */
  getRandomInteger(min, max) {
    return Math.floor((Math.random() * (max - min + 1) + min));
  },

  /**
   * returns a random value from an array
   *
   * @param {array} array - the array from which to pick a value
   * @returns a random value from an array
   */
  getRandomValueFromArray(array) {
    return array[random.getRandomInteger(0, array.length - 1)];
  },
};

module.exports = random;
