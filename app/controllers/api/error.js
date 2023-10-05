const errors = {
  /**
   * Error 404 middleware for API
   *
   * @param {*} request
   * @param {*} response
   */
  error404(request, response) {
    response.status(404).json({ status: 'error', message: 'Not Found' });
  },
};

module.exports = errors;
