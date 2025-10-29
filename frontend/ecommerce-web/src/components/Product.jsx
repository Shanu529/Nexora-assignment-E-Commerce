import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  // ✅ Load products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v2/products`
        );
        console.log("Fetched products:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Add to cart
  const handleAddToCart = async (productId) => {
    try {
      // ✅ Get userId from localStorage (saved at login/register)
      const userId = localStorage.getItem("userId");

      if (!userId) {
        alert("Please login first!");
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v3/cart-list`,
        {
          userId, // required for backend validation
          productId,
          qty: 1,
        }
      );

      alert("✅ Added to cart successfully!");
      console.log("Cart updated:", response.data);
    } catch (error) {
      console.error("❌ Error adding to cart:", error);
      alert("Failed to add product to cart");
    }
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex space-x-8 mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-1">
            Best Sellers
          </h2>
          <h2 className="text-2xl text-gray-400 cursor-pointer hover:text-black">
            New Arrivals
          </h2>
          <h2 className="text-2xl text-gray-400 cursor-pointer hover:text-black">
            Hot Sales
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className="group relative">
                <div className="relative bg-gray-100">
                  <img
                    src={product.image || "/img/default-product.jpg"}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />

                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-white text-xs font-bold px-2 py-1">
                      NEW
                    </span>
                  )}

                  <div className="absolute top-1/2 right-3 -translate-y-1/2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition">
                    <button className="bg-white p-2 shadow rounded-full hover:bg-black hover:text-white">
                      ♡
                    </button>
                    <button className="bg-white p-2 shadow rounded-full hover:bg-black hover:text-white">
                      ⟳
                    </button>
                    <button className="bg-white p-2 shadow rounded-full hover:bg-black hover:text-white">
                      🔍
                    </button>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <button
                    onClick={() => handleAddToCart(product._id)}
                    className="text-red-600 text-sm font-medium hover:underline"
                  >
                    + Add To Cart
                  </button>
                  <h3 className="text-gray-700 font-semibold">{product.name}</h3>
                  <p className="font-semibold text-gray-800">${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-4">
              No products found
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Product;
