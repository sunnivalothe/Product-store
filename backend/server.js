import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // middleware that allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});
