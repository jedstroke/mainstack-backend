"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const userRoutes_1 = tslib_1.__importDefault(require("./routes/userRoutes"));
const productRoutes_1 = tslib_1.__importDefault(require("./routes/productRoutes"));
const sanitizeMiddleware_1 = tslib_1.__importDefault(require("./middlewares/sanitizeMiddleware"));
// Load environment variables from .env file
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middleware for JSON parsing
app.use(express_1.default.json());
// MongoDB connection
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/store';
mongoose_1.default.connect(DB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));
// API routes
app.use(sanitizeMiddleware_1.default);
app.use('/api/auth', userRoutes_1.default);
app.use('/api/products', productRoutes_1.default);
// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the store API');
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
