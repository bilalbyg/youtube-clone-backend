const Mongoose = require("mongoose")

const db = Mongoose.connection;

db.once("open", () => {
  console.log("Database connection succeed");
});

Mongoose.set('strictQuery', true);

const connectDB = async () => {
    await Mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
    })
}

module.exports = {
    connectDB,
  };
// mongodb+srv://bbeygo71:jUwbMChiR4nkyg1j@cluster0.dbokudo.mongodb.net/