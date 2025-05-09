import express from "express";

const app = express();

export const startServer = (port: number | string = 3000) => {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};
