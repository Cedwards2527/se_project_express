const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require("./middlewares/logger");
const mainRouter = require("./routes/index");

const errorHandler = require("./middlewares/error-handler");


const app = express();
const { PORT = 3001 } = process.env;

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server will crash now');
  }, 0);
});

app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
})

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

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
