module.exports = (mongoose) => {
  mongoose.connect("mongodb://localhost:27017/login-test");

  const db = mongoose.connection;
  db.on("error", (err) => {
    console.log(`An error has occcured while connecting to DB: ${err}`);
  });
  db.on("open", () => {
    console.log(`Connected to DataBase. `);
  });
};


// "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
