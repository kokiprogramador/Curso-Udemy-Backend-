/*import { expect, assert } from "chai";
import request from "supertest";
import app from "../index.js";
Solo lo voy a descomentar cuando vaya a hacer testing
const url = "http://localhost:3000";

describe("Inserte el nombre y el precio", () => {
  it("Esperamos un name y un price", (done) => {
    request(url)
      .post("/api/v1/products")
      .send({ name: "Compu", price: 200 })
      .end((err, res) => {
        console.log(res.body);
        expect(res.status).to.equal(200);
        done();
      });
  });
});

describe("Suite de pruebas e2e para el curso", () => {
  it("Esperamos un Hola mundo", (done) => {
    request(app)
      .get("/")
      .end((err, res) => {
        console.log("A");
        assert.equal(res.text, "Hola mundo");
        done();
      });
    console.log("B");
  });
});*/
