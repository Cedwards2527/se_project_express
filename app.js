const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();
const { PORT = 3001 } = process.env;

app.use(express.json());

app.use("/users", usersRouter);

app.use("/", mainRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db", {})
  .then(() => {
    console.log("Connected to MongoDB: wtwr_db");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
