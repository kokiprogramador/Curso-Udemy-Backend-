import apiRouter from "./server/index.js";
import express from "express";
import faker from "faker";
import { errorsLogs, handlerError } from "./middlewares/error.handler.js";

const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hola mundo");
});
//La req es la request (la petición) y la res  es la respuesta

apiRouter(app);

app.use(handlerError);
app.use(errorsLogs);

app.listen(port, (req, res) => {
  console.log(`Puerto escuchando en el port  ${port}`);
});

export default app;
