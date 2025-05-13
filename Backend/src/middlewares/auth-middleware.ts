import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/environment-validation";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ message: "Não autorizado. Token ausente." });
  }

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as {
      companyName: string;
      id: string;
    };

    req.user = {
      name: decoded.companyName,
      id: decoded.id,
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido ou expirado." });
  }
};
