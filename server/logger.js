const winston = require('winston');

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
      level: 'debug'
    }),
    new (winston.transports.File)({
      timestamp: true,
      level: 'debug',
      dirname: __dirname + '/logs',
      maxsize: 1000000,
      json: false
    })
  ]
});

const testLogger = new (winston.Logger)();

const getLogger = function () {
  if(process.env.NODE_ENV !== 'test') {
    return logger;
  } else {
    return testLogger;
  }
};

module.exports = getLogger;
