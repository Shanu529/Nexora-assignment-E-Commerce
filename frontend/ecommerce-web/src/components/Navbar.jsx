import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-5">
      <h2 className="text-lg md:text-2xl font-bold">ProdcutsCart.</h2>

      <div className="hidden md:flex gap-10 text-sm md:text-lg font-medium">
        <Link to="/" className="hover:text-red-600 transition">
          Home
        </Link>
        <Link to="/admin" className="hover:text-red-600 transition">
          Create Product
        </Link>
        <Link to="/pages" className="hover:text-red-600 transition">
          Pages
        </Link>
        <Link to="/blog" className="hover:text-red-600 transition">
          Blog
        </Link>
        <Link to="/register" className="hover:text-red-600 transition">
          login
        </Link>
      </div>

      <div className="flex gap-4 md:gap-6 items-center text-sm md:text-lg">
        <span className="cursor-pointer hidden md:inline"> Profile</span>
        <span className="cursor-pointer">
          <Link to="/cart">🛒 Add Cart</Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
