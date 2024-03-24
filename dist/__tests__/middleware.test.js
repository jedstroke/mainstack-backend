"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const supertest_1 = tslib_1.__importDefault(require("supertest"));
const globals_1 = require("@jest/globals");
const express_1 = tslib_1.__importDefault(require("express"));
const sanitizeMiddleware_1 = tslib_1.__importDefault(require("../middlewares/sanitizeMiddleware"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(sanitizeMiddleware_1.default);
app.post("/test", (req, res) => {
    res.json(req.body);
});
(0, globals_1.describe)("Sanitizing Middleware", () => {
    (0, globals_1.it)("should sanitize request body", () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .post("/test")
            .send({ name: '<script>alert("hello")</script>' });
        (0, globals_1.expect)(response.status).toBe(200);
        (0, globals_1.expect)(response.body.name).toBe("scriptalerthelloscript");
    }));
});
