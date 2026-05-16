import faker from "faker";
import boom from "@hapi/boom";

const getAllProducts = async (req, res) => {
  //const price = allprice();
  try {
    const products = [];
    const { size } = req.query;
    const limit = size || 5;
    for (let index = 0; index < limit; index++) {
      products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
    return products;
  } catch (error) {
    console.log(error);
  }
};

const createNewProduct = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    res.json({
      ok: true,
      data: body,
    });
    return body;
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    //if (id != 1) {
    //throw new Error("Id no encontrado");
    //throw boom.notFound("Product not found");
    // res.status(404);
    //}
    const body = req.body;
    res.json({
      message: "success",
      product: body,
      id,
    });
    return body;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      message: "delete",
      id,
    });
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    res.json({
      id: id,
      name: "Pera",
      price: 20,
      category: "tecnologia",
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
};
