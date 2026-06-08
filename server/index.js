import express from "express";
import producsRouter from "../routes/products.js";
import usersRouter from "../routes/users.js";
import clientsRouter from "../routes/clients.js";
import categoryRouter from "../routes/category.js";

const apiRouter = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", producsRouter);
  router.use("/users", usersRouter);
  router.use("/clients", clientsRouter);
  router.use("/categories", categoryRouter);
};

export default apiRouter;
