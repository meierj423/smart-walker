const express = require("express");
const path = require("path");
// const initDb = require("./config/initDb");
const morgan = require("morgan");
const mongoose = require("mongoose");
const zipRouter = require("./routes/api-zip");

const PORT = process.env.PORT || 5000;
const app = express();

// log all requests to the console in development
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(zipRouter);

// initDb();
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/smart-walker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

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
