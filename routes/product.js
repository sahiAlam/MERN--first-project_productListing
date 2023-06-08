import express from "express";
import {
  createProduct,
  deleteProduct,
  readProducts,
  readSingleProduct,
  replaceProduct,
  updateProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/add", (req, res) => {
  res.json({
    name: "dakdoa",
  });
});

router
  .post("/", createProduct)
  .get("/", readProducts)
  .get("/:id", readSingleProduct)
  .put("/:id", replaceProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default router;
