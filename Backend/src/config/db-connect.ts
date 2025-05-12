import mongoose from "mongoose";
import { env } from "./environment-validation";

class MongooseConnect {
  async databaseConnect(): Promise<mongoose.Connection> {
    try {
      await mongoose.connect(
        `mongodb+srv://${env.USER_DB}:${env.PASSWORD_DB}@saude-az.ibgtoq4.mongodb.net/companies?retryWrites=true&w=majority&appName=saude-az`
      );
      console.log("✅ MongoDB conectado com sucesso.");
      return mongoose.connection;
    } catch (error) {
      console.error("❌ Erro ao conectar no MongoDB:", error);
      throw error;
    }
  }
}

export default MongooseConnect;
