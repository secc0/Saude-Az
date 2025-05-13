import AuthController from "controllers/auth-controller";
import { Router } from "express";
import { authenticate } from "middlewares/auth-middleware";
import WorkerController from "controllers/worker-controller";

const route = Router();

route.post("/registerWorker", authenticate, WorkerController.addWorker);
route.get("/listWorkers", authenticate, WorkerController.listWorkers);

export default route;
