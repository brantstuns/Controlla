'use strict'
const express = require("express")
const getLogger = require('./logger');

module.exports = {
  getApp: function () {
    const app = express();
    app.get("/", function (req, res) { res.send("like controlla, controlla, controlla...")});
    return app;
  },
  start: function (port) {
    const logger = getLogger();
    const app = this.getApp();
    return new Promise((resolve) => server = app.listen(port, () => {
      logger.info('Server started on port ... ' + port);
    resolve();
      }));
  },
  stop: function (port) {
    return new Promise((resolve) => server.close(resolve));
  }
};