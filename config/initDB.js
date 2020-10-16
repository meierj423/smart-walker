// Ensure you have run 'npm install mongodb'
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

module.exports = () => {
  return MongoClient.connect(connectionString, function (err, db) {
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
