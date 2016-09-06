'use strict'
const express = require("express")
const getLogger = require('./logger');
const $ = require('jQuery');
const boaController = require('./controllers/boaController');

module.exports = {
  getApp: function () {
    const app = express();
    app.get('/boa', boaController);
    app.use((req, res) => { res.send("like controlla, controlla, controlla...") });
    return app;
  },
  start: function (port) {
    const logger = getLogger();
    const app = this.getApp();
    return new Promise((resolve) => server = app.listen(port, () => {
      logger.info('CONTROLLA STARTED ON PORT : ' + port);
    resolve();
      }));
  },
  stop: () => {
    return new Promise((resolve) => server.close(resolve));
  }
};