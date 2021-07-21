const Leaderboard = require("../models/treasure-models");

const getTreasure = (req, res) => {
  Leaderboard.findTreasure((err, results) => {
    if (err) {
      res
        .status(500)
        .send(`Dang, we have a problem in the treasure room: ${err}`);
    } else {
      res.json(results[0]);
    }
  });
};

module.exports = { getTreasure };
