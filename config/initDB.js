// const mongoose = require("mongoose");
var MongoClient = require("mongodb").MongoClient;

var username = "user";
var password = "password";
var hosts =
  "iad2-c0-2.mongo.objectrocket.com:53752,iad2-c0-1.mongo.objectrocket.com:53752,iad2-c0-0.mongo.objectrocket.com:53752";
var database = "smartwalkerDB";
var options = "?replicaSet=e1ebecbc129847a1b8af53134799f16f";
var connectionString =
  "mongodb://" +
  username +
  ":" +
  password +
  "@" +
  hosts +
  "/" +
  database +
  options;

const MONGODB_URI = process.env.MONGODB_URI || connectionString;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = () => {
  return MongoClient.connect(MONGODB_URI, dbOptions, function (err, db) {
    if (db) {
      db.close();
    }
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("Connected!");
      process.exit();
    }
  });
};
