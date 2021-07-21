const express = require("express");
const { getTreasure } = require("../controllers/treasure-controller");
const router = express.Router();

router.get("/", getTreasure);

module.exports = router;
