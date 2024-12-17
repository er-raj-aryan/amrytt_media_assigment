import { Router } from "express";
import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from '../Controllers/categoryController.js';

const router = Router()


router.get('/', getCategories);
router.get("/:id", getCategory);

router.post("/", createCategory);

// update a product
router.patch("/:id", updateCategory);
// update a product
router.put("/:id", updateCategory);

// delete a product
router.delete("/:id", deleteCategory);

export default router;

