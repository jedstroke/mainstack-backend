import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";
import { authenticateUserMiddleware } from "controllers/userController";

const router = express.Router();

// GET /api/products
router.get("/", getProducts);

// POST /api/products
router.post("/", authenticateUserMiddleware, createProduct);

// PUT /api/products/:id
router.put("/:id", authenticateUserMiddleware, updateProduct);

// DELETE /api/products/:id
router.delete("/:id", authenticateUserMiddleware, deleteProduct);

export default router;
