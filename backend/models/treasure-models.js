const connection = require("../db/config");

const Leaderboard = {};

Leaderboard.findTreasure = (callback) => {
  connection.query("SELECT * FROM assets", (err, results, fields) => {
    callback(err, results, fields);
  });
};

module.exports = Leaderboard;
