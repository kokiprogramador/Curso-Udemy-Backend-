import express from "express";
import productServices from "../services/servicesProduct.js";
import validatorHandler from "../middlewares/validator.handler.js";
import {
  schemaProductCreate,
  updateSchemaProduct,
  getProductSchema,
} from "../schema/schemaProduct.js";

const router = express.Router();

router.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res) => {
    const getProduct = await productServices.getOneProduct;
    return getProduct(req, res);
  },
);

router.post(
  "/",
  validatorHandler(schemaProductCreate, "body"),
  async (req, res) => {
    const postProduct = await productServices.createNewProduct(req, res);
    return postProduct;
  },
);

router.patch(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(updateSchemaProduct, "body"),
  async (req, res) => {
    const patchProduct = await productServices.updateProduct(req, res);
    return patchProduct;
  },
);

router.delete("/:id", async (req, res) => {
  const deleteProduct = await productServices.deleteProduct(req, res);
  return deleteProduct;
});

router.get("/", async (req, res, next) => {
  try {
    const products = await productServices.getAllProducts(req, res);
    return res.json(products);
  } catch (error) {
    next(error);
  }
});

export default router;
