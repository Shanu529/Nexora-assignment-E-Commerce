

import express from "express";
import {
    createProduct,
    deleteProduct,
    getOneProduct,
    getProducts,
    updateProduct
} from "../controllers/productsControllers.js";

const router = express.Router();
// Get All Products
router.get("/", getProducts)

// Get One product
router.get("/:id", getOneProduct)

//create products
router.post("/", createProduct)

//Update product
router.put("/:id", updateProduct)

// delete product
router.delete("/:id", deleteProduct)

export default router;


