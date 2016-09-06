const driver = require('phantom');

module.exports = (req, res) => {
  // driver.create()
  //   .then(phantom => {
  //     phantom.createPage()
  //       .then(page => {
  //         page.open('https://www.bankofamerica.com/')
  //           .then(status => {
  //             console.log('page status: ' + status)})
  //           .catch(err => { console.log('oh shit : ' + err)})
  //           .then(() => {
  //             page.evaluate(() => {
  //               return document.getElementById('onlineId1')
  //             })
  //               .then(user => ( user.value = 'woop'));
  //
  //             page.evaluate(() => {
  //               return document.getElementById('passcode1')
  //             })
  //               .then(pass => ( pass.value = 'nope'));
  //           })
  //           .then(() => { $('#hp-sign-in-btn').click()})
  //           .then(() => { console.log(document) })
  //           .catch( err => { console.log("everything broke somewhere")});
  //       });
  //   });
  res.send('boa cool');
};
