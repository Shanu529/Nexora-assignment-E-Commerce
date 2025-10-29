import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateProduct() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
    inStock: true,
  });
  const [editId, setEditId] = useState(null); // 🆕 Track product being edited

  // ✅ Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/v2/products`
      );
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Create or Update product (combined)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // 🔹 If editing, update existing product
        await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/api/v2/products/${editId}`,
          formData
        );
        alert("✅ Product updated successfully!");
        setEditId(null);
      } else {
        // 🔹 Else create new
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v2/products`,
          formData
        );
        alert("✅ Product created successfully!");
      }

      // Reset form
      setFormData({
        name: "",
        price: "",
        description: "",
        image: "",
        category: "",
        inStock: true,
      });
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("❌ Error saving product");
    }
  };

  // ✅ Load product into form for editing
  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
      inStock: product.inStock,
    });
    setEditId(product._id); // set edit mode
  };

  // ✅ Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/v2/products/${id}`
      );
      alert("🗑️ Product deleted");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("❌ Error deleting product");
    }
  };

  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Admin — Manage Products</h2>

      {/* ✅ Create / Update Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border p-6 rounded-lg shadow-md bg-white"
      >
        <input
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full p-2 border rounded"
          required
        />

        <select
          value={formData.inStock}
          onChange={(e) =>
            setFormData({ ...formData, inStock: e.target.value === "true" })
          }
          className="w-full p-2 border rounded"
        >
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>

        <button
          type="submit"
          className={`${
            editId ? "bg-blue-600" : "bg-green-600"
          } text-white px-4 py-2 rounded hover:opacity-90`}
        >
          {editId ? "Update Product" : "Create Product"}
        </button>
      </form>

      {/* ✅ Product List */}
      <div className="mt-10 space-y-4">
        <h3 className="text-xl font-semibold mb-4">All Products</h3>

        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="flex justify-between items-center border p-4 rounded"
            >
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-gray-600">₹{product.price}</p>
              </div>

              <div className="space-x-3">
                <button
                  onClick={() => handleEdit(product)} // 🆕 now loads product into form
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default CreateProduct;
