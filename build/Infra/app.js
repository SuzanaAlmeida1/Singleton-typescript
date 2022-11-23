"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // importar o express para utilizar a biblioteca
const routes_1 = __importDefault(require("../routes")); // importando as rotas
const app = (0, express_1.default)(); //inicializar o servidor (já temos o servidor)
app.use(routes_1.default);
// especificando a porta:
app.listen(3000, () => console.log("servidor rodando na porta 3000")); //método listen passa um callback para saber se o servuidor está rodando
exports.default = app;
