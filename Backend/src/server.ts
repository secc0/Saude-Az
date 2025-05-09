import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

export const startServer = (port: number | string = 3000) => {
  app.get("/", (req, res) => {
    res.send("Teste");
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};
