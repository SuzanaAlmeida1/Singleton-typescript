import express, { Request, Response } from "express";

const routes = express.Router() //método de rotas do express


//receber informações da URL
routes.get("/", (req: Request, res: Response)=>{
  res.send("hello world");
});



//exportando o mósulo:

export default routes;