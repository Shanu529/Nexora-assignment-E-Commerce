

import express from "express";

import { addToCart, getCart, removeFromCart } from "../controllers/cartController.js"


const router = express.Router();

// Cart Routess
router.get("/:userId", getCart);
router.post("/", addToCart);
router.delete("/:id", removeFromCart);

export default router;


