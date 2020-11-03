const express = require("express");
const Search = require("../models/Search");

const router = express.Router();

router.get("/api/locations", (req, res) => {
  Search.find({})
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No location found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

router.post("/api/recent-location", (req, res) => {
  console.log("Body:", req.body);
  res.json(req.body);
});

module.exports = router;
