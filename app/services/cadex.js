const parts = require('../../data/parts.json');
// const logger = require('../log');
const { getRandomValueFromArray } = require('../helpers/random');

const cadexService = {
  /**
   * generate a new cadex
   *
   * @returns {object} - a cadex object
   */
  generate() {
    const cadexObject = {
      name: getRandomValueFromArray(parts.names),
      adjective: getRandomValueFromArray(parts.adjectives),
      verb: getRandomValueFromArray(parts.verbs),
      complement: getRandomValueFromArray(parts.complements),
      toString() {
        const { toString, ...cadex } = this;
        return Object.values(cadex).join(' ');
      },
    };
    return cadexObject;
  },

  /**
   * add new terms for cadex parts
   *
   * @param object} dataObj - a cadex object
   */
  updateData(dataObj) {
    Object.keys(parts).forEach((key) => {
      const inputField = key.substring(0, key.length - 1);
      if (dataObj[inputField]) {
        parts[key].push(dataObj[inputField]);
      }
    });
  },
};

module.exports = cadexService;
