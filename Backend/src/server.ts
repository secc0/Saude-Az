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

import { env } from "./config/environment-validation";
import app from "./app";
import MongooseConnect from "./config/db-connect";
import path from "path"; // Importe o módulo 'path'
import express from "express"; // Importe o express

const mongooseConnect = new MongooseConnect();

mongooseConnect
  .databaseConnect()
  .then(() => {
    // ✅ Serve arquivos estáticos do frontend (React/Vue)
    app.use(express.static(path.join(__dirname, "public/dist"))); // Caminho corrigido

    // ✅ Rota fallback para o SPA (todas as rotas não-API vão para o frontend)
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "public/dist/index.html"));
    });

    app.listen(env.PORT, () => {
      console.log(
        `🚀 Servidor rodando em https://saude-az-empresarial.onrender.com`
      );
    });
  })
  .catch((err) => {
    console.error(
      "Erro ao conectar no banco de dados. Servidor não foi iniciado."
    );
  });
