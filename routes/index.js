const router = require("express").Router();
const userRouter = require("./users");
const itemRouter = require("./clothingItems");
const { NOT_FOUND } = require("../utils/errors");
const { createUser, login } = require("../controllers/users");
const { validateUser, validateLogin } = require("../middlewares/validation");

router.post("/signup", validateUser , createUser);
router.post("/signin", validateLogin, login);

router.use("/users", userRouter);

router.use("/items", itemRouter);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Router not found" });
});

module.exports = router;
