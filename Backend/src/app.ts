import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth-route";
import testeRoutes from "./routes/authRouteCheck";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true); // aceita qualquer origem
    },
    credentials: true, // permite cookies como token httpOnly
  })
);

app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/authRouteCheck", testeRoutes);
export default app;
