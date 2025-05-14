// import { env } from "./config/environment-validation";
// import app from "./app";
// import MongooseConnect from "./config/db-connect";

// const mongooseConnect = new MongooseConnect();

// mongooseConnect
//   .databaseConnect()
//   .then(() => {
//     app.listen(env.PORT, () => {
//       console.log(`🚀 Servidor rodando em https://saude-az.onrender.com`);
//     });
//   })
//   .catch((err) => {
//     console.error(
//       "Erro ao conectar no banco de dados. Servidor não foi iniciado."
//     );
//   });

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Configura caminhos para ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Serve o frontend (React/Vue)
app.use(express.static(path.join(__dirname, "public/dist")));

// Rota fallback para SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/dist/index.html"));
});

// Suas rotas API aqui...

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});
