const express = require("express");
const productController = require("../controllers/productController");
const methodOverride = require("method-override");
const authenticateJWT = require("../middlewares/authMiddleware");
const productController = require("../controllers/productController");
const router = express.Router();

router.use(methodOverride("_method"));

router.get("/", productController.showDashboard);
router.get("/new", authenticateJWT, productController.showNewProduct);
router.post("/", authenticateJWT, productController.createProduct);
router.get(
  "/:productId/edit",
  authenticateJWT,
  productController.showEditProduct
);
router.put(
  "/:productId",
  authenticateJWT,
  productController.updateProduct,
  console.log(token)
);
router.delete(
  "/:productId/delete",
  authenticateJWT,
  productController.deleteProduct
);

module.exports = router;
