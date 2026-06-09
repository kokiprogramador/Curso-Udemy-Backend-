import { Sequelize } from "sequelize";
import { config } from "../config/config.js";
import setupModels from "../db/models/index.js";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

console.log(USER, PASSWORD);

export const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: false,
});

setupModels(sequelize);

//sequelize.sync(); este codigo solo sirve para sincronizar la base de datos con los modelos hechos, sin embargo,
// gasta recursos innecesariamente.

export default sequelize;
