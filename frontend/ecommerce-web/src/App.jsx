

import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Cart from "./pages/cart";
import Register from "./pages/Register"
import CreateProduct from "./pages/CreateProduct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>

         <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<CreateProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
