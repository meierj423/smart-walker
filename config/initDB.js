const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://dbUser:dbUserPassword@cluster0.hpfet.mongodb.net/smartwalkerDB?retryWrites=true&w=majority";

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

module.exports = () => {
  return mongoose
    .connect(MONGODB_URI, dbOptions)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.error(err));
};
