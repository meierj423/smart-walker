const express = require("express");

const router = express.Router();

router.get("/api/zip", (req, res) => {
  console.log("I got a request!");
  console.log(req.body);
});

module.exports = router;
