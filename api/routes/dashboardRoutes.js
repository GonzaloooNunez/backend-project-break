const express = require("express");
const productController = require("../controllers/productController");
const methodOverride = require("method-override");
const authenticateJWT = require("../middlewares/authMiddleware");
const router = express.Router();

router.use(methodOverride("_method"));

//localhost:PORT/dashboard
router.get("/", authenticateJWT, productController.showDashboard);
router.post("/", authenticateJWT, productController.createProduct);

//localhost:PORT/dashboard/new
router.get("/new", authenticateJWT, productController.showNewProduct);

//localhost:PORT/dashboard/111111/edit
router.get(
  "/:productId/edit",
  authenticateJWT,
  productController.showEditProduct
);
router.put("/:productId", authenticateJWT, productController.updateProduct);

//localhost:PORT/dashboard/111111/delete
router.delete(
  "/:productId/delete",
  authenticateJWT,
  productController.deleteProduct
);

module.exports = router;
