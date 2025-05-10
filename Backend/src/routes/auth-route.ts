import AuthController from "controllers/auth-controller"
import {Router} from "express"

const route = Router()

route.post("/register", AuthController.register)


export default route