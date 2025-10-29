import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-lg font-bold text-white">
            Male & Female <span className="text-cyan-500">fashion.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            The customer is at the heart of our unique business model, which
            includes design.
          </p>
          
          <div className="flex gap-3 mt-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"
              className="h-6"
              alt="Bitcoin"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
              className="h-6"
              alt="Amex"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              className="h-6"
              alt="PayPal"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              className="h-6"
              alt="MasterCard"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              className="h-6"
              alt="Visa"
            />
          </div>
        </div>

        {/* Shopping Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">SHOPPING</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Clothing Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Trending Shoes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Accessories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sale
              </a>
            </li>
          </ul>
        </div>

        {/* More Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">HELP</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Payment Methods
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Return & Exchanges
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">NEWSLETTER</h3>
          <p className="text-sm mb-4">
            Be the first to know about new arrivals, look books, sales & promos!
          </p>
          <div className="flex items-center border-b border-gray-500">
            <input
              type="email"
              placeholder="Your email"
              className="bg-black outline-none text-sm py-2 w-full placeholder-gray-400"
            />
            <svg
              className="w-5 h-5 text-gray-400 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H8m0 0l4-4m-4 4l4 4"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm">
        Copyright © 2025 All rights reserved | This template is made with{" "}
        <span className="text-red-500">♥</span> by{" "}
        <a href="#" className="text-cyan-500">
          Shanu Chhetri
        </a>
      </div>
    </footer>
  );
}

export default Footer;
