const connection = require("../db/config");

const Assets = {};

const db = connection.promise();

Assets.findTreasure = (callback) => {
  connection.query("SELECT * FROM assets", (err, results, fields) => {
    callback(err, results, fields);
  });
};

Assets.updateTreasure = (body) => {
  return db.query("UPDATE assets SET ?", [body]).then(([results]) => results);
};

module.exports = Assets;
