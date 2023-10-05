const cadexService = require('../../services/cadex');
const logger = require('../../log');

const cadexController = {
  /**
   * cadex API controller for GET /cadex
   *
   * @param {object} request
   * @param {object} response
   */
  getCadex(request, response) {
    try {
      const cadex = cadexService.generate();

      // 1. Approche naïve - on fait confiance à l'utilisateur.
      // on utilise le spread operator pour créer un nouvel objet qui contient
      // les propriétés de l'objet cadex et les propriétés de l'objet request.query
      // cadex = { ...cadex, ...request.query };

      Object.keys(cadex).forEach((key) => {
        if (key !== 'toString') {
          if (request.query[key]) {
            cadex[key] = request.query[key];
          }
        }
      });
      response.json({ ...cadex, cadex: `${cadex}` });
    } catch (error) {
      logger.log(error);
      response.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
  },
  /**
   * cadex API controller for POST /cadex
   *
   * @param {object} request
   * @param {object} response
   */
  updateCadex(request, response) {
    cadexService.updateData(request.body);
    const cadex = cadexService.generate();
    Object.keys(cadex).forEach((key) => {
      if (key !== 'toString') {
        if (request.body[key]) {
          cadex[key] = request.body[key];
        }
      }
    });
    response.json({ cadex });
  },
};

module.exports = cadexController;
