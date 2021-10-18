const db = require('../db')

var postCowList = ({name, description}) => {
  return new Promise((resolve, reject) => {
    db.query(`INSERT INTO Cowlist (cowName, cowDescription) VALUES ("${name}", "${description}")`, (err, results, fields) => {
      if(err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

module.exports = postCowList;