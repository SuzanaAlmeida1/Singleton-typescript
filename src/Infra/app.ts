import express from "express"; // importar o express para utilizar a biblioteca
import routes from "../routes"; // importando as rotas
import Conection from "../Database/Conection";


const app = express(); //inicializar o servidor (já temos o servidor)


app.use(routes);
// especificando a porta:

app.listen(3000, ()=> console.log("servidor rodando na porta 3000")); //método listen passa um callback para saber se o servuidor está rodando

export default app;