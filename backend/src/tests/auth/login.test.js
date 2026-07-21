const request = require("supertest");
const app = require("../../app");

describe("POST /api/auth/login", () => {
    it("should login successfully with valid credentials", async () => {
        // Register a user first
        await request(app).post("/api/auth/register").send({
            name: "Sonali Kale",
            email: "sonali@gmail.com",
            password: "Password123",
        });

        // Login
        const response = await request(app).post("/api/auth/login").send({
            email: "sonali@gmail.com",
            password: "Password123",
        });

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Login successful");
        expect(response.body).toHaveProperty("token");

        expect(response.body.user).toMatchObject({
            name: "Sonali Kale",
            email: "sonali@gmail.com",
            role: "customer",
        });
    });

    it("should return 400 if email is missing", async () => {
        const response = await request(app).post("/api/auth/login").send({
            password: "Password123",
        });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Email is required");
    });

    it("should return 400 if password is missing", async () => {
        const response = await request(app).post("/api/auth/login").send({
            email: "sonali@gmail.com",
        });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Password is required");
    });

    it("should return 401 if email does not exist", async () => {
        const response = await request(app).post("/api/auth/login").send({
            email: "unknown@gmail.com",
            password: "Password123",
        });

        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Invalid email or password");
    });

    it("should return 401 if password is incorrect", async () => {
        await request(app).post("/api/auth/register").send({
            name: "Sonali Kale",
            email: "sonali@gmail.com",
            password: "Password123",
        });

        const response = await request(app).post("/api/auth/login").send({
            email: "sonali@gmail.com",
            password: "WrongPassword",
        });

        expect(response.statusCode).toBe(401);
        expect(response.body.message).toBe("Invalid email or password");
    });
});