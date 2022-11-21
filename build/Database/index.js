"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mySqlConection = void 0;
const env_1 = __importDefault(require("../Infra/env"));
const Conection_1 = __importDefault(require("./Conection"));
const dbConfig = {
    dialect: env_1.default.DB_DIALECT,
    port: env_1.default.DB_PORT,
    host: env_1.default.DB_HOST,
};
if (process.env.NODE_ENV === "production") {
    Object.assign(dbConfig, {
        dialectOptions: {
            ssl: {
                requite: true,
                rejectUnauthorized: false,
            },
        },
    });
}
const mySqlConection = new Conection_1.default(env_1.default.DB_NAME, env_1.default.DB_USER, env_1.default.DB_PASS, dbConfig);
exports.mySqlConection = mySqlConection;
