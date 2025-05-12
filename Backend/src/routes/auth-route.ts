import AuthController from "controllers/auth-controller";
import { Router } from "express";
import { authenticate } from "middlewares/auth-middleware";

const route = Router();

route.post("/register", AuthController.register);
route.post("/login", AuthController.login);

export default route;
