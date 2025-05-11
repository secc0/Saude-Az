import {Request, Response, Router} from "express"
import { authenticate } from "middlewares/auth-middleware"

const route = Router()



route.get("/", authenticate,(req: Request, res: Response    )=>{
    console.log("chegou aq")
})


export default route