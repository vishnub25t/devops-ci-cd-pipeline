const request = require("supertest");
const app = require("../app");

describe("Node CI/CD Tests", () => {

	    test("GET / should return welcome message", async () => {
		            const res = await request(app).get("/");

		            expect(res.statusCode).toBe(200);
		            expect(res.text).toBe("Node.js CI/CD Project Running 🚀");
		        });

	    test("GET /health should return status UP", async () => {
		            const res = await request(app).get("/health");

		            expect(res.statusCode).toBe(200);
		            expect(res.body).toEqual({
				                status: "UP"
				            });
		        });

});
