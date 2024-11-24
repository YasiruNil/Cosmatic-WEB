import { describe } from "node:test";
import supertest from "supertest";
import { app } from "../index";

describe("product", () => {
  describe("get all the products", () => {
    it("should return status code of 200", async () => {
      await supertest(app).get("/products").expect(200);
    });

    it("should return status code of 404, if end point is not available", async () => {
      await supertest(app).get("/productsList").expect(404);
    });
  });

  describe("fetch product details", () => {
    it("should return status code of 200", async () => {
        await supertest(app).get("/product/1").expect(200);
      });
      it("should return status code of 400, if end point is wrong", async () => {
        await supertest(app).get("/product/:1").expect(400);
      });
  });
});
