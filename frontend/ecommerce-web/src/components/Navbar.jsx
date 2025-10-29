import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-16 py-5">
        {/* Logo */}
        <h2 className="text-lg md:text-2xl font-bold text-gray-800">
          Products<span className="text-cyan-500">Cart.</span>
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm md:text-lg font-medium text-gray-700">
          <Link to="/" className="hover:text-cyan-500 transition">
            Home
          </Link>
          <Link to="/admin" className="hover:text-cyan-500 transition">
            Create Product
          </Link>
          <Link to="/pages" className="hover:text-cyan-500 transition">
            Pages
          </Link>
          <Link to="/blog" className="hover:text-cyan-500 transition">
            Blog
          </Link>
          <Link to="/register" className="hover:text-cyan-500 transition">
            Login
          </Link>
        </div>

        {/* Right side */}
        <div className="flex gap-4 md:gap-6 items-center text-sm md:text-lg text-gray-700">
          <span className="cursor-pointer hidden md:inline">Profile</span>
          <Link to="/cart" className="cursor-pointer hover:text-cyan-500">
            🛒 Cart
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="flex flex-col items-start px-6 py-4 space-y-3 text-gray-700 font-medium text-base">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="w-full hover:text-cyan-500 transition"
            >
              Home
            </Link>
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="w-full hover:text-cyan-500 transition"
            >
              Create Product
            </Link>
            <Link
              to="/pages"
              onClick={() => setIsOpen(false)}
              className="w-full hover:text-cyan-500 transition"
            >
              Pages
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="w-full hover:text-cyan-500 transition"
            >
              Blog
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="w-full hover:text-cyan-500 transition"
            >
              Login
            </Link>
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              className="w-full hover:text-cyan-500 transition"
            >
              🛒 Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
