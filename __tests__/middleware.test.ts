import request from "supertest";
import { describe, it, expect } from "@jest/globals";
import express, { Application } from "express";
import sanitizeMiddleware from "../middlewares/sanitizeMiddleware";

const app: Application = express(); 

app.use(express.json());
app.use(sanitizeMiddleware);

app.post("/test", (req, res) => {
  res.json(req.body);
});

describe("Sanitizing Middleware", () => {
  it("should sanitize request body", async () => {
    const response = await request(app)
      .post("/test")
      .send({ name: '<script>alert("hello")</script>' });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("scriptalerthelloscript");
  });
});
