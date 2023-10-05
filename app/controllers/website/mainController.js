const mainController = {
  /**
   * Cadex website controller for GET /
   *
   * @param {object} _
   * @param {object} response
   */
  getHomePage(_, response) {
    response.render('home');
  },
};

module.exports = mainController;
