// src/index.ts
import express from "express";
import { envConfig } from "./config/envconfig";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(envConfig.server.PORT, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
