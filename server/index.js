import express from "express";
import producsRouter from "../routes/products.js";
import usersRouter from "../routes/users.js";

const apiRouter = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", producsRouter);
  router.use("/users", usersRouter);
};

export default apiRouter;
