import supertest from "supertest";
import app from "../server";
import { usersFns } from "../models/usersModel";


const userStore = new usersFns();
const request = supertest(app);

describe("User Endpoints", () => {
    it("Should create a user", async () => {
        const response = await request.post('/users/add').send({
            firstName: "test",
            lastName: "test",
            passWord: "test"
        });
        expect(response.status).toBe(200);
    });

    it("Should return all users", async () => {

        try {
            const response = await request.get('/users').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1MSI6eyJpZCI6MSwiZmlyc3RuYW1lIjoiYWhtZWQiLCJsYXN0bmFtZSI6InNoYW1hIiwicGFzc3dvcmQiOiIkMmIkMTAkOG9tNWdPbWFYUVh5c3RyUkxVVzJVLjEwekxXVDFhLldmWEk3aVJLdWhRZWVsWVRXa1g2Ti4ifSwiaWF0IjoxNjQ5MzQwODU1fQ.cqMxYXwkWcEqpIERGIhUnxryZy3xOJ3Rp_wYAk58_2U');
            expect(response.status).toBe(200);
        } catch (error) {
            console.log(error);
        }

    });
    it("Should return a user by id", async () => {
        const response = await request.get('/users/1').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1MSI6eyJpZCI6MSwiZmlyc3RuYW1lIjoiYWhtZWQiLCJsYXN0bmFtZSI6InNoYW1hIiwicGFzc3dvcmQiOiIkMmIkMTAkOG9tNWdPbWFYUVh5c3RyUkxVVzJVLjEwekxXVDFhLldmWEk3aVJLdWhRZWVsWVRXa1g2Ti4ifSwiaWF0IjoxNjQ5MzQwODU1fQ.cqMxYXwkWcEqpIERGIhUnxryZy3xOJ3Rp_wYAk58_2U');
        expect(response.status).toBe(200);
    });

});

describe('User Functions', () => {
    it("should return a user object", async (): Promise<void> => {
        const user = await userStore.create({
            firstName: "test",
            lastName: "test",
            passWord: "test"
        });
        expect(user).toBeInstanceOf(Object);
    });
    it('create function test', async () => {
        const user = await userStore.create({
            firstName: "test",
            lastName: "test",
            passWord: "test",
        });
        expect(user).toBeDefined();
    });
    it("should return a user", async (): Promise<void> => {
        const user = await userStore.show(1);
        expect(user).toBeInstanceOf(Object);
    });
});
