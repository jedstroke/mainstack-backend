"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProducts = void 0;
const tslib_1 = require("tslib");
const Product_1 = tslib_1.__importDefault(require("../models/Product"));
const getProducts = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield Product_1.default.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
});
exports.getProducts = getProducts;
const createProduct = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, description } = req.body;
        const newProduct = new Product_1.default({ name, price, description });
        yield newProduct.save();
        res.status(201).json({ message: "Product created successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating product" });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, price, description } = req.body;
        yield Product_1.default.findByIdAndUpdate(id, { name, price, description });
        res.status(200).json({ message: "Product updated successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error updating product" });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield Product_1.default.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting product" });
    }
});
exports.deleteProduct = deleteProduct;
