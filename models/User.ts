import { Schema, model, Document } from "mongoose";

// Interface for User document
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

// Define User schema
const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Export User model
export default model<IUser>("User", userSchema);
