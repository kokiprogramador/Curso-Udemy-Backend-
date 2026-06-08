import express from "express";
import servicesCategory from "../services/servicesCategory.js";
import {
  getCategory,
  createCategory,
  updateCategory,
} from "../schema/schemaCategory.js";
import validatorHandler from "../middlewares/validator.handler.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await servicesCategory.allCategory();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getCategory, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await servicesCategory.oneCategory(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  "/",
  validatorHandler(createCategory, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCategory = await servicesCategory.createCategory(body);
      res.json(newCategory);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  "/:id",
  validatorHandler(getCategory, "params"),
  validatorHandler(updateCategory, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatesCategory = await servicesCategory.updateCategory(id, body);
      res.json(updatesCategory);
    } catch (error) {
      next(error);
    }
  },
);

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const categoryDelete = await servicesCategory.deleteCategory(id, body);
    res.json(categoryDelete);
  } catch (error) {
    next(error);
  }
});

export default router;
