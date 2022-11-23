"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router(); //método de rotas do express
//receber informações da URL
routes.get("/", (req, res) => {
    res.send("hello world");
});
//exportando o mósulo:
exports.default = routes;
