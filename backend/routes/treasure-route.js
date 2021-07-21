const express = require("express");
const {
  getTreasure,
  setTreasure,
} = require("../controllers/treasure-controller");
const router = express.Router();

router.get("/", getTreasure);
router.put("/update", setTreasure);

module.exports = router;
