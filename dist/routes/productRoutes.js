"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const router = express_1.default.Router();
// GET /api/products
router.get("/", productController_1.getProducts);
// POST /api/products
router.post("/", productController_1.createProduct);
// PUT /api/products/:id
router.put("/:id", productController_1.updateProduct);
// DELETE /api/products/:id
router.delete("/:id", productController_1.deleteProduct);
exports.default = router;
