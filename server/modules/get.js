const db = require('../db')

var getCowList = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM Cowlist', (err, results, fields) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  })
};

module.exports = getCowList;