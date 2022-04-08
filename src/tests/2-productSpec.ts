import supertest from "supertest";
import app from "../server";


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