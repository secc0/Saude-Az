// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import authRoutes from "./routes/auth-route";
// import testeRoutes from "./routes/authRouteCheck";
// import workerRoutes from "./routes/worker-route";
// const app = express();
// app.use(express.json());
// app.use(
//   cors({
//     origin: "https://saude-az-1.onrender.com",
//     credentials: true,
//   })
// );

// app.use(cookieParser());

// app.use("/auth", authRoutes);
// app.use("/authRouteCheck", testeRoutes);
// app.use("/colaboradores", workerRoutes);
// export default app;

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth-route";
import testeRoutes from "./routes/authRouteCheck";
import workerRoutes from "./routes/worker-route";
import path from "path"; // <-- Adicione esta linha

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://saude-az-1.onrender.com", // <-- Altere para o SEU domínio
    credentials: true,
  })
);

app.use(cookieParser());

// Rotas da API
app.use("/auth", authRoutes);
app.use("/authRouteCheck", testeRoutes);
app.use("/colaboradores", workerRoutes);

// ✅ Adicione esta parte para servir arquivos estáticos (frontend)
app.use(express.static(path.join(__dirname, "../public/dist")));

// ✅ Rota fallback para o frontend (SPA)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/dist/index.html"));
});

export default app;
