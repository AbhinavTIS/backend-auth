import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // handle Zod validation errors
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: err.issues[0].message, // returns first validation error cleanly
    });
  }

  console.error(err.message);
  res.status(500).json({ message: err.message || "Server error" });
};
