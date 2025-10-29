


import mongoose from "mongoose";

import products from "./products.js";

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: "user",
        required: true,
    },

    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId, ref: "prodcuts",
                required: true,
            },
            qty: {
                type: Number,
                default: 1,
            }
        }
    ]
});

export default mongoose.model("cart", cartSchema);