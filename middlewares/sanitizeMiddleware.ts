import { Request, Response, NextFunction } from "express";

const sanitizeMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
        req.query[key] = sanitizeString(req.query[key] as string);
      }
    });
  }
  next();
};

const sanitizeString = (input: string): string => {
  // Sanitize input string (e.g., remove special characters)
  return input.replace(/[^\w\s]/gi, "");
};

export default sanitizeMiddleware;
