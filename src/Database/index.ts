
import ENV from "../Infra/env";
import Conection from "./Conection";
import {Dialect} from "Sequelize/types";


const dbConfig = {
  dialect: ENV.DB_DIALECT as Dialect,
  port: ENV.DB_PORT,
  host: ENV.DB_HOST,
};

if (process.env.NODE_ENV === "production") {
  Object.assign(dbConfig,{
    dialectOptions:{
      ssl:{
        requite:true,
        rejectUnauthorized: false,
      },
    },
  });
}
const mySqlConection = new Conection(
  ENV.DB_NAME,
  ENV.DB_USER,
  ENV.DB_PASS,
  dbConfig
);

export{mySqlConection};