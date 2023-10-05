const Joi = require('joi');

const cadexQuery = Joi.object({
  name: Joi.string(),
  adjective: Joi.string(),
  verb: Joi.string(),
  complement: Joi.string(),
});

const cadexBody = Joi.object({
  name: Joi.string(),
  adjective: Joi.string(),
  verb: Joi.string(),
  complement: Joi.string(),
}).required().min(1);

module.exports = { cadexQuery, cadexBody };
