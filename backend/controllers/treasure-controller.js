const Assets = require("../models/treasure-models");

const getTreasure = (req, res) => {
  Assets.findTreasure((err, results) => {
    if (err) {
      res
        .status(500)
        .send(`Dang, we have a problem in the treasure room: ${err}`);
    } else {
      res.json(results[0]);
    }
  });
};

const setTreasure = (req, res) => {
  Assets.updateTreasure(req.body)
    .then((results) => {
      if (results) res.json(results);
      else res.status(404).send("Not found my Lord");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(`Whoops, an error my Lord: ${err}`);
    });
};

module.exports = { getTreasure, setTreasure };
