const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //res.send("Lofasz");
  res.render("index");
});

module.exports = router;
