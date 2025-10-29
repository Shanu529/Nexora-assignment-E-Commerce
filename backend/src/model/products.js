
import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    inStock: {
        type: Boolean,
        required: true,
    },

});

const products = mongoose.model('prodcuts', productsSchema);

export default products;