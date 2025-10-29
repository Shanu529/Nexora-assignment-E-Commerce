


import cart from "../model/cartModel.js";
import products from "../model/products.js";
import user from "../model/user.js";

//  Add product to cart
export const addToCart = async (req, res) => {
    try {
        const { userId, productId, qty } = req.body;
        let userCart = await cart.findOne({ userId });

        if (!userCart) {
            // create new cart if user doesn’t have one
            userCart = new cart({ userId, items: [{ productId, qty }] });
        } else {
            // check if product already in cart
            const itemIndex = userCart.items.findIndex(
                (item) => item.productId.toString() === productId
            );

            if (itemIndex > -1) {
                userCart.items[itemIndex].qty += qty; // increase quantity
            } else {
                userCart.items.push({ productId, qty });
            }
        }

        await userCart.save();
        res.status(200).json(userCart);
    } catch (error) {
        res.status(500).json({ message: "Error adding to cart", error:error.message });
    }
};

//  Get user cart
export const getCart = async (req, res) => {
    try {
        const { userId } = req.params;
        const userCart = await cart
            .findOne({ userId })
            .populate("items.productId", "name price image");

        if (!userCart) return res.status(404).json({ message: "Cart empty" });

        const total = userCart.items.reduce(
            (sum, item) => sum + item.productId.price * item.qty,
            0
        );

        res.status(200).json({ cart: userCart, total });
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart", error });
    }
};

// Remove product from cart
export const removeFromCart = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const userCart = await cart.findOne({ userId });

        if (!userCart) return res.status(404).json({ message: "Cart not found" });

        userCart.items = userCart.items.filter(
            (item) => item.productId.toString() !== productId
        );

        await userCart.save();
        res.status(200).json({ message: "Item removed", cart: userCart });
    } catch (error) {
        res.status(500).json({ message: "Error removing item", error });
    }
};
