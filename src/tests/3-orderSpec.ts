import supertest from "supertest";
import app from "../server";

const request = supertest(app);



describe("Orders Endpoints", () => {
    it("Should create an order", async () => {
        const response = await request.post("/orders/add").send(
            {
                userID: "1",
                status: "active",
            }).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1MSI6eyJpZCI6MSwiZmlyc3RuYW1lIjoiYWhtZWQiLCJsYXN0bmFtZSI6InNoYW1hIiwicGFzc3dvcmQiOiIkMmIkMTAkOG9tNWdPbWFYUVh5c3RyUkxVVzJVLjEwekxXVDFhLldmWEk3aVJLdWhRZWVsWVRXa1g2Ti4ifSwiaWF0IjoxNjQ5MzQwODU1fQ.cqMxYXwkWcEqpIERGIhUnxryZy3xOJ3Rp_wYAk58_2U');
        expect(response.status).toBe(200);
    });
    it('Should add product to order', async () => {
        try {
            const response = await request.post("/orders/addProduct/1").send({
                productID: 1,
                quantity: 1
            }).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1MSI6eyJpZCI6MSwiZmlyc3RuYW1lIjoiYWhtZWQiLCJsYXN0bmFtZSI6InNoYW1hIiwicGFzc3dvcmQiOiIkMmIkMTAkOG9tNWdPbWFYUVh5c3RyUkxVVzJVLjEwekxXVDFhLldmWEk3aVJLdWhRZWVsWVRXa1g2Ti4ifSwiaWF0IjoxNjQ5MzQwODU1fQ.cqMxYXwkWcEqpIERGIhUnxryZy3xOJ3Rp_wYAk58_2U');
            expect(response.status).toBe(200);
        } catch (error) {
            console.log(error);
        }
    });
    it("Should return active order", async () => {
        try {
            const response = await request.get("/orders/active/1").set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1MSI6eyJpZCI6MSwiZmlyc3RuYW1lIjoiYWhtZWQiLCJsYXN0bmFtZSI6InNoYW1hIiwicGFzc3dvcmQiOiIkMmIkMTAkOG9tNWdPbWFYUVh5c3RyUkxVVzJVLjEwekxXVDFhLldmWEk3aVJLdWhRZWVsWVRXa1g2Ti4ifSwiaWF0IjoxNjQ5MzQwODU1fQ.cqMxYXwkWcEqpIERGIhUnxryZy3xOJ3Rp_wYAk58_2U');
            expect(response.status).toBe(200);
        } catch (error) {
            console.log(error);
        }
    });
    it("Should return completed order", async () => {
        try {
            const response = await request.get("/orders/completed/1").set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1MSI6eyJpZCI6MSwiZmlyc3RuYW1lIjoiYWhtZWQiLCJsYXN0bmFtZSI6InNoYW1hIiwicGFzc3dvcmQiOiIkMmIkMTAkOG9tNWdPbWFYUVh5c3RyUkxVVzJVLjEwekxXVDFhLldmWEk3aVJLdWhRZWVsWVRXa1g2Ti4ifSwiaWF0IjoxNjQ5MzQwODU1fQ.cqMxYXwkWcEqpIERGIhUnxryZy3xOJ3Rp_wYAk58_2U');
            expect(response.status).toBe(200);
        } catch (error) {
            console.log(error);
        }
    });


});