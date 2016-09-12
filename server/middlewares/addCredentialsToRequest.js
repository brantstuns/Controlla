const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
  const filePath = path.join(process.env.CREDS)
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
      next();
    } else {
      req.creds = Object.assign({}, JSON.parse(data));
      console.log('did it', JSON.parse(data))
      next();
    }
  });
};
