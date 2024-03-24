import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import sanitizeMiddleware from "./middlewares/sanitizeMiddleware";

// Load environment variables from .env file
dotenv.config();

const app: Application = express();

// Middleware for JSON parsing
app.use(express.json());

// MongoDB connection
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/store';
mongoose.connect(DB_URI,)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// API routes
app.use(sanitizeMiddleware);
app.use('/api/auth', userRoutes);
app.use('/api/products', productRoutes);

// Default route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the store API');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
