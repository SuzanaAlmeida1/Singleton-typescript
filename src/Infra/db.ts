import ENV from "./env";

const db = {
  usernamen: ENV.DB_USER,
  password: ENV.DB_PASS,
  database: ENV.DB_NAME,
  host: ENV.DB_HOST,
  dialect: ENV.DB_DIALECT,
};

if (process.env.NODE_ENV === "production") {
  Object.assign(db, {
    dialectOptions: {
      ssl:{
        require: true,
        rejectUnauthorized: false,
      },
    },

  });
}

export default db;