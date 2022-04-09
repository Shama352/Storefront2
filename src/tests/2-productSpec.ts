import supertest from "supertest";
import app from "../server";
import { product, productFns } from "../models/productsModel";

const productStore = new productFns();
const request = supertest(app);

describe("Products Endpoints", () => {
    it("Should create a product", async () => {
        const response = await request.post("/products/add").send(
            {
                name: "test",
                price: 200,
                category: "test",
            });
        expect(response.status).toBe(200);
    });
    it("Should return all products", async () => {
        const response = await request.get("/products");
        expect(response.status).toBe(200);
    });
    it("Should return a product by id", async () => {
        const response = await request.get("/products/1");
        expect(response.status).toBe(200);
    });
});


describe("Product Functions", () => {
    it('index function', async () => {
        const product = await productStore.index();
        expect(product).toBeDefined();

    });
    it('Should return an object of product', async () => {
        const product = await productStore.create({
            name: "test",
            price: 200,
            category: "test",
        });
        expect(product).toBeInstanceOf(Object)
    });
    it('getProdcutsByCategory function', async () => {
        const product = await productStore.getProdCat("test");
        expect(product).toBeInstanceOf(Object);
    });
});