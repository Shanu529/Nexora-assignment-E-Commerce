// controllers/checkoutController.js
export const checkout = async (req, res) => {
  try {
    const { cartItems } = req.body;
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Calculate total
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    // Generate mock receipt
    const receipt = {
      total,
      timestamp: new Date().toISOString(),
    };

    res.status(200).json({
      message: "Checkout successful",
      receipt,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
