import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import productRouter from "./routes/product.js";

export const app = express();
dotenv.config();

// using middlewares
app.use(express.json());
app.use(express.static(path.resolve(path.join("build"))));
app.use(cors());
app.use("/api/v1/products", productRouter);
