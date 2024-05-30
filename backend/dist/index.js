"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/db/database");
const envconfig_1 = require("./config/envconfig");
const database_setup_1 = require("./script/database-setup");
const app = (0, express_1.default)();
const port = 3000;
// Connect to MongoDB
(0, database_1.connectDB)();
(0, database_setup_1.run)();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(envconfig_1.envConfig.server.PORT, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
