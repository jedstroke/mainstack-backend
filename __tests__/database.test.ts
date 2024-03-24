import mongoose from "mongoose";
import dotenv from "dotenv";
import { describe, it, beforeAll, expect , afterEach} from "@jest/globals";

dotenv.config();

const DB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/store";

describe("MongoDB Connection", () => {
  beforeAll(async () => {
    await mongoose
      .connect(DB_URI)
      .then((res) => {
        console.log("Database connected!");
      })
      .catch((err) => console.error("MongoDB connection error:", err));
  });

  it("Should connect to the MongoDB database", async () => {
    await mongoose.connect(DB_URI);
    expect(mongoose.connection.readyState).toBe(1);
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });
});
