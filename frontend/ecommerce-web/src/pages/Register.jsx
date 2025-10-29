import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Utility to decode JWT (no external lib needed)
function decodeJWT(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

function Auth() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? "/api/v1/user/login" : "/api/v1/user/register";
      const { data } = await axios.post(`${API_URL}${endpoint}`, formData, {
        withCredentials: true,
      });

      if (data?.token) {
        localStorage.setItem("token", data.token);

        // ✅ Decode token to get user id
        const decoded = decodeJWT(data.token);
        if (decoded?.id) {
          localStorage.setItem("userId", decoded.id);
        }
      }

      setMessage(data.message || "Success!");
      console.log("Response:", data);
      navigate("/");
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="p-2 rounded bg-gray-700 focus:outline-none"
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 rounded bg-gray-700 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded font-semibold"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {message && <p className="text-center mt-3 text-sm">{message}</p>}

        <p
          className="mt-4 text-center text-sm text-blue-400 cursor-pointer hover:underline"
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage("");
          }}
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default Auth;
