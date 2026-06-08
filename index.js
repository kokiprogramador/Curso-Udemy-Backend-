import express from "express";
import cors from "cors";
import faker from "faker";
import dotenv from "dotenv";
import { errorsLogs, handlerError } from "./middlewares/error.handler.js";
import apiRouter from "./server/index.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

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
