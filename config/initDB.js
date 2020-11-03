const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI || "mongodb+srv://dbUser:dbUserPassword@cluster0.hpfet.mongodb.net/smartwalkerDB?retryWrites=true&w=majority";

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

module.exports = () => {
  return mongoose
    .connect(mongoUri, dbOptions)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.error(err));
};
