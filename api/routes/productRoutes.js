const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//Bien
//...../products ?category="camisetas"

//Mal
// /products/camisetas
// /products/zapatos

router.get("/products", productController.showProducts);
router.get("/products/:productId", productController.showProductById);
router.get("/products", productController.showProductByCategory);
router.post("/products", productController.createProduct);
router.delete("/products/:productId/delete", productController.deleteProduct);

router.get("/products/new", productController.showNewProduct);
router.get("/products/:productId", productController.showProductById);
router.get("/products/:productId/edit", productController.showEditProduct);
router.put("/products/:productId", productController.updateProduct);

module.exports = router;
