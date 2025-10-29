import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoDbconnection from "./src/database/db.js";

import productsRoutes from "./src/routes/productsRoutes.js";
import cartRoutes from "./src/routes/cartRoutes.js";
import authUser from "./src/routes/authUser.js";
import checkoutRoutes from "./src/routes/checkoutRoutes.js";

dotenv.config();
mongoDbconnection();

const app = express();

app.use(express.json());
const allowedOrigins = [
  "https://nexora-assignment-e-commerce-fronte.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello! Backend server running...");
});

app.use("/api/v1/user", authUser);
app.use("/api/v2/products", productsRoutes);
app.use("/api/v3/cart-list", cartRoutes);
app.use("/api/checkout", checkoutRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
