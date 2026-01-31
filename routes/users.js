const router = require("express").Router();
const auth = require("../middlewares/auth");
const {
  createUser,
  getCurrentUser,
  login,
  updateProfile,
} = require("../controllers/users");

router.post("/signup", createUser);
router.post("/signin", login);

router.get("/me", auth, getCurrentUser);
router.patch("/me", auth, updateProfile);

module.exports = router;
