import express from "express";
import cors from "cors";
import faker from "faker";
import dotenv from "dotenv";
import { errorsLogs, handlerError } from "./middlewares/error.handler.js";
import apiRouter from "./server/index.js";
const port = process.env.PORT;
const app = express();

export const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || "3000",
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
};

console.log(config);

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

//La req es la request (la petición) y la res  es la respuesta

apiRouter(app);

/*app.use(handlerError);
app.use(errorsLogs);*/

app.listen(port, (req, res) => {
  console.log(`Puerto escuchando en el port ${port}`);
});

export default app;
