const errors = {
  /**
   * Error 404 middleware for website
   *
   * @param {*} request
   * @param {*} response
   */
  error404(request, response) {
    response.status(404).render('error', { status: 404, message: 'Not Found' });
  },
};

module.exports = errors;
