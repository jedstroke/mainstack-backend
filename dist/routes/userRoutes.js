"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
// POST /api/auth/register
router.post("/register", userController_1.registerUser);
// POST /api/auth/login
router.post("/login", userController_1.loginUser);
exports.default = router;
