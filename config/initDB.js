module.exports = () => {
  return mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/smart-walker",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
};
