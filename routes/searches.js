const express = require("express");
const Search = require("../models/Search");

const router = express.Router();

// Finds all locations in DB, sorts them by newest, and returns JSON data
router.get("/api/locations", (req, res) => {
  Search.find({})
    .limit(1)
    .sort({ $natural: -1 })
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No location found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

// Creates new location in database
router.post("/api/recent-location", ({ body }, res) => {
  Search.create(body)
    .then((body) => {
      console.log("data save in db!!");
      res.json(body);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Displays most recently searched location
router.get("/api/recent-location", (req, res) => {
  return res.json(req.body);
});

module.exports = router;
