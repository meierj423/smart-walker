const express = require("express");
const path = require("path");
const initDb = require("./config/initDB");
const morgan = require("morgan");
const mongoose = require("mongoose");
const zipRouter = require("./routes/searches.js");

const PORT = process.env.PORT || 3001;
const app = express();

// log all requests to the console in development
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up express to use the routes in searches.js
app.use(zipRouter);

initDb();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
