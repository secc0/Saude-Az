import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth-route"
import testeRoutes from "./routes/teste-route"
const app = express();
app.use(express.json())
app.use(cors());
app.use(cookieParser());

app.use("/auth", authRoutes)
app.use("/teste", testeRoutes                   )
export default app;