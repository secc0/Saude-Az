import express from "express";
import cors from "cors";
import { getLivros } from "./teste";
import { env } from "./config/environment-validation"

const app = express();
app.use(cors());

export function startServer(){
  app.get("/", async (req, res) => {
    res.send("aaaaa")
    // try {
    //   const livros = await getLivros();
    //   if (!livros) {
    //     return res.status(404).json({ erro: "Nenhum livro encontrado" });
    //   }
    //   res.json(livros);
    // } catch (error) {
    //   res.status(500).json({ erro: "Erro ao buscar livros" });
    // }
  });

  app.listen(env.PORT, () => {
    console.log(`Server is running on http://localhost:${env.PORT}`);
  });
};

startServer()
