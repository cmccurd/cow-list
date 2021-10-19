const db = require('../db')

var deleteFromCowList = ({cowId}) => {
  return new Promise((resolve, reject) => {
    db.query(`DELETE Cowlist FROM Cowlist WHERE cowId = "${cowId}"`, (err, results, fields) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  })
};

module.exports = deleteFromCowList;