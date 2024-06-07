const express = require("express");
const productController = require("../controllers/productController");
const methodOverride = require("method-override");
const router = express.Router();

router.use(methodOverride("_method"));

router.get("/", productController.showProducts);
router.get("/:productId", productController.showProductById);
router.get("/dashboard", productController.showDashboard);
router.get("/dashboard/new", productController.showNewProduct);
router.post("/dashboard", productController.createProduct);
router.get("/dashboard/:productId/edit", productController.showEditProduct);
router.put("/dashboard/:productId", productController.updateProduct);
router.delete("/dashboard/:productId/delete", productController.deleteProduct);

module.exports = router;
