const express = require("express");
const productController = require("../controllers/productController");
const methodOverride = require("method-override");
const router = express.Router();

router.use(methodOverride("_method"));

router.get("/", productController.showProducts);
router.get("/:productId", productController.showProductById);

module.exports = router;
