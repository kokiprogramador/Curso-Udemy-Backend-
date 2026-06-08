import express from "express";
import servicesClients from "../services/servicesClients.js";
import {
  schemaClientsCreate,
  updateClientsSchema,
  getClientsSchema,
} from "../schema/clientsSchema.js";
import validatorHandler from "../middlewares/validator.handler.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const getClients = await servicesClients.getAllClients(req, res);
    return res.send({ getClients });
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getClientsSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const oneClient = await servicesClients.getClientById(id);
      res.json(oneClient);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  "/",
  validatorHandler(schemaClientsCreate, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newClient = await servicesClients.createClient(body);
      return res.status(200).json(newClient);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  "/:id",
  validatorHandler(updateClientsSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateClient = await servicesClients.updateClient({ id, body });
      return res.json(updateClient);
    } catch (error) {
      next(error);
    }
  },
);

router.delete("/", async (req, res, next) => {
  try {
    const { id } = req.params;
    const clientsDelete = servicesClients.deleteClient({ id });
    return res.json(clientsDelete);
  } catch (error) {
    next(error);
  }
});

export default router;
