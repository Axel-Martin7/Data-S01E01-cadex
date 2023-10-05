const express = require('express');
const cadexController = require('../../controllers/api/cadexController');
const cadexErrorController = require('../../controllers/api/error');
const { cadexQuery, cadexBody } = require('../../validations/schemas');
const validate = require('../../validations/validate');

const router = express.Router();

/**
 * @typedef {object} cadex
 * @property {string} name - name used in cadex
 * @property {string} adjective - adjective used in cadex
 * @property {string} verb - verb used in cadex
 * @property {string} complement - complement used in cadex
 * @property {string} cadex - full cadex
 */

/**
 * @typedef {object} error
 * @property {string} status - request status
 * @property {string} error - error message
 */

/**
 * GET /api/cadex
 *
 * @summary retrieves a random cadex and customize it
 *
 * @param {string} name.query - custom name
 * @param {string} adjective.query - custom adjective
 * @param {string} verb.query - custom verb
 * @param {string} complement.query - custom complement
 *
 * @return {cadex} 200 - success response
 * @return {error} 400 - invalid input data
 */

router.get('/cadex', validate(cadexQuery, 'query'), cadexController.getCadex);

/**
 * POST /api/cadex
 *
 * @summary retrieves a random cadex and customize it
 *
 * @param {cadex} request.body.required
 * @return {cadex} 200 - success response
 * @return {error} 400 - invalid input data
 */
router.post('/cadex', validate(cadexBody, 'body'), cadexController.updateCadex);

router.use(cadexErrorController.error404);

module.exports = router;
