'use strict'
const express = require("express")
const getLogger = require('./logger');
const $ = require('jQuery');
const boaControlla = require('./controllers/boaControlla');

module.exports = {
  getApp: function () {
    const app = express();
    app.get('/boa', boaControlla);
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