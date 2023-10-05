require('dotenv').config();

const express = require('express');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const router = require('./app/routers');
const logger = require('./app/log');

const port = process.env.PORT || 3000;

const swaggerOptions = {
  info: {
    version: '1.0',
    title: 'Cadex',
  },
  baseDir: `${__dirname}/app`,
  filesPattern: './**/*.js',
  swaggerUIPath: '/api-docs',
  exposeSwaggerUI: true,
};

const app = express();

/*
const mySwagger = expressJSDocSwagger(app)
mySwagger(swaggerOptions);
*/
expressJSDocSwagger(app)(swaggerOptions);

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.json());
app.use(router);

app.listen(port, () => {
  logger.log(`Server ready: http://localhost:${port}`);
});
