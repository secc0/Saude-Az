import { Request, Response, Router } from "express";
import { authenticate } from "middlewares/auth-middleware";

const route = Router();

route.get("/", authenticate, (req: Request, res: Response) => {
  res.json({
    message: "Hello World",
    user: req.user,
  });
});

export default route;
