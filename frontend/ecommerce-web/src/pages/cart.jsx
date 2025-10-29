import React, { useEffect, useState } from "react";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [receipt, setReceipt] = useState(null); //  new state for receipt

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) return console.log("Please login first");

        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v3/cart-list/${userId}`
        );

        setCart(res.data.cart?.items || []);
        setTotal(res.data.total || 0);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const handleRemove = async (productId) => {
    try {
      const userId = localStorage.getItem("userId");

      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/v3/cart-list/${productId}`,
        { data: { userId, productId } }
      );

      setCart((prevCart) =>
        prevCart.filter((item) => item.productId._id !== productId)
      );
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  //  Checkout Function
  const handleCheckout = async () => {
    try {
      const cartItems = cart.map((item) => ({
        name: item.productId?.name,
        price: item.productId?.price,
        qty: item.qty,
      }));

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/checkout`,
        { cartItems }
      );

      setReceipt(res.data.receipt);
      alert("Checkout successful!");
      setCart([]); // optional: clear cart
      setTotal(0);
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Checkout failed!");
    }
  };

  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border p-4 rounded"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.productId?.image || "/img/default-product.jpg"}
                    alt={item.productId?.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.productId?.name}</p>
                    <p className="text-gray-600">Qty: {item.qty}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">₹{item.productId?.price}</p>
                  <button
                    onClick={() => handleRemove(item.productId._id)}
                    className="text-red-500 text-sm hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right border-t pt-4">
            <p className="text-lg font-semibold">Total: ₹{total}</p>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </>
      )}

      {/* Show receipt after checkout */}
      {receipt && (
        <div className="mt-8 p-4 border rounded bg-green-50">
          <h3 className="font-semibold text-lg mb-2">Receipt</h3>
          <p>Total: ₹{receipt.total}</p>
          <p>Date: {new Date(receipt.timestamp).toLocaleString()}</p>
        </div>
      )}
    </section>
  );
}

export default Cart;
