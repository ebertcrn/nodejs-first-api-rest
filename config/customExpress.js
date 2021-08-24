// imports
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
  const app = express();

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  // basicamente a const app está sendo passada para todos os arquivos dentro da pasta controllerss
  consign()
    .include('controllers')
    .into(app);
  
  return app;
};