const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mainRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const { createUser, login } = require("./controllers/users");

const app = express();
const { PORT = 3001 } = process.env;

app.use(cors());
app.use(express.json());

app.post("/signup", createUser);
app.post("/signin", login);

app.use("/users", usersRouter);
app.use("/", mainRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db", {})
  .then(() => {
    //  console.log("Connected to MongoDB: wtwr_db");
    app.listen(PORT, () => {
      // console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
