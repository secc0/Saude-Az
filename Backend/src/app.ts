import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth-route";
import testeRoutes from "./routes/authRouteCheck";
import workerRoutes from "./routes/worker-route";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://saude-az-1.onrender.com",
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/authRouteCheck", testeRoutes);
app.use("/colaboradores", workerRoutes);
export default app;
