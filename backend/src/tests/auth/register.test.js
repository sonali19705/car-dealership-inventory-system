const request = require("supertest");
const app = require("../../app");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

describe("POST /api/auth/register", () => {
    it("should register a new customer successfully", async () => {
        const response = await request(app)
            .post("/api/auth/register")
            .send({
                name: "Sonali Kale",
                email: "sonali@gmail.com",
                password: "Password123",
            });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty(
            "message",
            "User registered successfully"
        );
    });
    it("should return 400 when name is missing", async () => {
        const response = await request(app).post("/api/auth/register").send({
            email: "sonali@gmail.com",
            password: "Password123",
        });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Name is required");
    });

    it("should return 400 when email is missing", async () => {
        const response = await request(app).post("/api/auth/register").send({
            name: "Sonali Kale",
            password: "Password123",
        });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Email is required");
    });

    it("should return 400 when password is missing", async () => {
        const response = await request(app).post("/api/auth/register").send({
            name: "Sonali Kale",
            email: "sonali@gmail.com",
        });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Password is required");
    });

    it("should return 400 when password is less than 6 characters", async () => {
        const response = await request(app).post("/api/auth/register").send({
            name: "Sonali Kale",
            email: "sonali@gmail.com",
            password: "12345",
        });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe(
            "Password must be at least 6 characters"
        );
    });

    it("should ignore role sent by the client", async () => {
        const response = await request(app).post("/api/auth/register").send({
            name: "Sonali Kale",
            email: "sonali2@gmail.com",
            password: "Password123",
            role: "admin",
        });

        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe("User registered successfully");
    });

    it("should return 409 when email is already registered", async () => {
        const user = {
            name: "Sonali Kale",
            email: "sonali@gmail.com",
            password: "Password123",
        };

        // First registration
        await request(app)
            .post("/api/auth/register")
            .send(user);

        // Register again with same email
        const response = await request(app)
            .post("/api/auth/register")
            .send(user);

        expect(response.statusCode).toBe(409);
        expect(response.body).toHaveProperty(
            "message",
            "Email already registered"
        );
    });
    it("should store a hashed password in the database", async () => {
        const userData = {
            name: "Sonali Kale",
            email: "sonali@gmail.com",
            password: "Password123",
        };

        await request(app)
            .post("/api/auth/register")
            .send(userData);

        const savedUser = await User.findOne({
            email: userData.email,
        });

        expect(savedUser).not.toBeNull();
        expect(savedUser.password).not.toBe(userData.password);

        const isMatch = await bcrypt.compare(
            userData.password,
            savedUser.password
        );

        expect(isMatch).toBe(true);
    });
});