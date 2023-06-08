import Product from "../models/product.js";

// POST
const createProduct = async (req, res) => {
  const product = await new Product(req.body);
  await product.save();
  res.status(201).json({
    status: true,
    message: "Data inserted",
  });
};

// GET
const readProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({
    status: true,
    products,
  });
};

// GET Single
const readSingleProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.status(200).json({
    status: true,
    product,
  });
};

// PUT
const replaceProduct = async (req, res) => {
  const { id } = req.params;
  const docs = await Product.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  });
  res.status(200).json({
    status: true,
    message: "product updated",
  });
};

// PATCH
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const docs = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  res.status(200).json({
    status: true,
    message: "product updated",
  });
};

// DELETE
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const docs = await Product.findOneAndDelete({ _id: id });
  res.status(200).json({
    status: true,
    message: "product deleted",
  });
};

export {
  createProduct,
  readProducts,
  readSingleProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
