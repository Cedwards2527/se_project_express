const router = require("express").Router();
const auth = require("../middlewares/auth");
const { validateClothingitem, validateId } = require("../middlewares/validation");

const {
  createClothingItem,
  getClothingItems,
  deleteClothingItem,
  likeClothingItem,
  dislikeClothingItem,
} = require("../controllers/clothingItems");

router.get("/", getClothingItems);

router.post("/", auth, validateClothingitem, createClothingItem, );
router.delete("/:itemId", auth, validateId, deleteClothingItem,);
router.put("/:itemId/likes", auth, validateId, likeClothingItem);
router.delete("/:itemId/likes", auth, validateId, dislikeClothingItem);

module.exports = router;
