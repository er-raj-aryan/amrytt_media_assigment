import { Router } from "express";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../Controllers/productController.js';

const router = Router()


router.get('/', getProducts);
router.get("/:id", getProduct);

router.post("/", createProduct);

// update a product
router.patch("/:id", updateProduct);
// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

export default router;

