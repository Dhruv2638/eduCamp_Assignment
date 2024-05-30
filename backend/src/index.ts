// src/index.ts
import express from "express";
import { connectDB } from "./config/db/database";
import { envConfig } from "./config/envconfig";
import { run } from "./script/database-setup";

const app = express();
const port = 3000;
// Connect to MongoDB
connectDB();
// run();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(envConfig.server.PORT, () => {
  console.log(`Server is running at http://localhost:${port}`);
});