"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const globals_1 = require("@jest/globals");
dotenv_1.default.config();
const DB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/store";
(0, globals_1.describe)("MongoDB Connection", () => {
    (0, globals_1.beforeAll)(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default
            .connect(DB_URI)
            .then((res) => {
            console.log("Database connected!");
        })
            .catch((err) => console.error("MongoDB connection error:", err));
    }));
    (0, globals_1.it)("Should connect to the MongoDB database", () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.connect(DB_URI);
        (0, globals_1.expect)(mongoose_1.default.connection.readyState).toBe(1);
    }));
    (0, globals_1.afterEach)(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield mongoose_1.default.disconnect();
    }));
});
