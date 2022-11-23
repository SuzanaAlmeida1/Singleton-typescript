"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app = new App();
const port = process.env.PORT ? process.env.PORT : 3000;
app.setup({ port });
