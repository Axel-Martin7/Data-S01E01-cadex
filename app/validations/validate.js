/**
 * return validation middlewares according to
 * a dataSource and a schema
 *
 * @param {Object} schema - a joi validation schema
 * @param {'query'|'body'} dataSource - the source of data to validate
 * @returns {function} - a middleware function
 */
function validate(schema, dataSource) {
  return (request, response, next) => {
    const { error } = schema.validate(request[dataSource]);
    if (error) {
      return response.status(400).json({ status: 'error', errors: error.details.map((err) => err.message) });
    }
    return next();
  };
}

module.exports = validate;
