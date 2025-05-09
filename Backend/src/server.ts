import express from "express";
import cors from "cors";
import { getLivros } from "./teste";

const app = express();
app.use(cors());

export const startServer = (port: number | string = 3000) => {
  app.get("/", async (req, res) => {
    try {
      const livros = await getLivros();
      if (!livros) {
        return res.status(404).json({ erro: "Nenhum livro encontrado" });
      }
      res.json(livros);
    } catch (error) {
      res.status(500).json({ erro: "Erro ao buscar livros" });
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};
