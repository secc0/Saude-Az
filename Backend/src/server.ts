import { env } from "./config/environment-validation";
import app from "./app";
import MongooseConnect from "./config/db-connect";

const mongooseConnect = new MongooseConnect();

mongooseConnect.databaseConnect()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar no banco de dados. Servidor não foi iniciado.");
  });