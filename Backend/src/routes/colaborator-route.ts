import ColaboratorController from "controllers/colaborator-controller";
import { Router } from "express";
import { authenticate } from "middlewares/auth-middleware";


const route = Router()


route.post("/create", authenticate, ColaboratorController.createColaborator)


export default route