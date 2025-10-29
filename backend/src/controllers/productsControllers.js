
import express from "express";

import products from "../model/products.js";

// getting all products
export const getProducts = async (req, res) => {

    try {
        const getAllProducts = await products.find({});
        res.status(200).json(getAllProducts)
    } catch (error) {
        res.status(500).json({ message: "server error", error: error.message })
    }
}

// get only one products by id
export const getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "don't have product id" })
        }

        const oneProduct = await products.findById(id);
        if (!oneProduct) {
            return res.status(404).json({ message: "prodcut not found" })
        };

        res.status(200).json(oneProduct)

    } catch (error) {
        res.status(500).json({ message: "server error ", error: error.message })

    }
}

// Create new product (Admin)
export const createProduct = async (req, res) => {
    try {
        const { name, price, description, image, category, inStock } = req.body;

        // Validate required fields
        if (!name || !price || !description || !image || !category || inStock === undefined) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create new product
        const newProduct = new products({
            name,
            price,
            description,
            image,
            category,
            inStock,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({
            message: "Product created successfully",
            product: savedProduct,
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error while creating product",
            error: error.message,
        });
    }
};

// update prodcuts by (asmin)
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await products.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // returns updated product
        );

        if (!updatedProduct)
            return res.status(404).json({ message: "Product not found" });

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};

// delete product
export const deleteProduct = async (req, res) => {

    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).json({ message: "not have id" })
        };
        const deletedProduct = await products.findByIdAndDelete(id);

        if (!deleteProduct) {
            return res.status(404).json({ message: "product not found" })
        }

        res.status(200).json({ message: "products deletede" })
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }

}