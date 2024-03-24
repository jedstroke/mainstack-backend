"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sanitizeMiddleware = (req, res, next) => {
    // Sanitize request body
    if (req.body) {
        Object.keys(req.body).forEach((key) => {
            req.body[key] = sanitizeString(req.body[key]);
        });
    }
    // Sanitize request query parameters
    if (req.query) {
        Object.keys(req.query).forEach((key) => {
            if (typeof req.query[key] === "string") {
                req.query[key] = sanitizeString(req.query[key]);
            }
        });
    }
    next();
};
const sanitizeString = (input) => {
    // Sanitize input string (e.g., remove special characters)
    return input.replace(/[^\w\s]/gi, "");
};
exports.default = sanitizeMiddleware;
