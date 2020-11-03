const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SearchSchema = new Schema({
  location: {
    type: String,
    trim: true,
  },
});

const Search = mongoose.model("Search", SearchSchema);

module.exports = Search;
