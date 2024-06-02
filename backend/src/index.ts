// src/index.ts
import express, { Application } from "express";
import { connectDB } from "./config/db/database";
import { envConfig } from "./config/envconfig";
import authRoutes from "./routes/authRoutes";
import passport from "passport";

const app: Application = express();
const port = envConfig.server.PORT;

// Connect to MongoDB
connectDB();
app.use(express.json());
app.use(passport.initialize());

app.use("/api/auth", authRoutes);
app.get("/ping", (req, res) => {
  res.send("Server is running");
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
