import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/User";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "");

    // Set authentication cookie
    res.cookie("authToken", token, { httpOnly: true });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
};

// Middleware to validate user authentication
export const authenticateUserMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authToken = req.cookies.authToken;
  if (!authToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify JWT token
    const decodedToken = jwt.verify(
      authToken,
      process.env.JWT_SECRET || ""
    ) as { userId: string };
    const user = await UserModel.findById(decodedToken.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
