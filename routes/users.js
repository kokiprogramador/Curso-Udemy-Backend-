import express from "express";
import serviceUsers from "../services/servicesUsers.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const getUsers = await serviceUsers.getALlUsers(req, res);
});

export default router;
