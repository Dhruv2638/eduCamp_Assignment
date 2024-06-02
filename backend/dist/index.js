"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/db/database");
const envconfig_1 = require("./config/envconfig");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const passport_1 = __importDefault(require("passport"));
const app = (0, express_1.default)();
const port = envconfig_1.envConfig.server.PORT;
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
app.use("/api/auth", authRoutes_1.default);
// Connect to MongoDB
(0, database_1.connectDB)();
// run();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
