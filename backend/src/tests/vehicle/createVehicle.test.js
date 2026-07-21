const request = require("supertest");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = require("../../app");
const Vehicle = require("../../models/Vehicle");

describe("POST /api/vehicles", () => {
    let adminToken;
    let customerToken;

    beforeAll(() => {
        adminToken = jwt.sign(
            { id: "1", role: "admin" },
            process.env.JWT_SECRET
        );

        customerToken = jwt.sign(
            { id: "2", role: "customer" },
            process.env.JWT_SECRET
        );
    });

    beforeEach(async () => {
        await Vehicle.deleteMany({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    const validVehicle = {
        make: "Toyota",
        model: "Fortuner",
        category: "SUV",
        price: 4200000,
        quantity: 5,
    };

    it("should create a vehicle", async () => {
        const response = await request(app)
            .post("/api/vehicles")
            .set("Authorization", `Bearer ${adminToken}`)
            .send(validVehicle);

        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe("Vehicle created successfully");
        expect(response.body.vehicle.make).toBe("Toyota");
    });

    it("should return 400 if make is missing", async () => {
        const response = await request(app)
            .post("/api/vehicles")
            .set("Authorization", `Bearer ${adminToken}`)
            .send({
                ...validVehicle,
                make: "",
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Make is required");
    });

    it("should return 400 if model is missing", async () => {
        const response = await request(app)
            .post("/api/vehicles")
            .set("Authorization", `Bearer ${adminToken}`)
            .send({
                ...validVehicle,
                model: "",
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Model is required");
    });

    it("should return 400 if category is missing", async () => {
        const response = await request(app)
            .post("/api/vehicles")
            .set("Authorization", `Bearer ${adminToken}`)
            .send({
                ...validVehicle,
                category: "",
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Category is required");
    });

    it("should return 400 if price is invalid", async () => {
        const response = await request(app)
            .post("/api/vehicles")
            .set("Authorization", `Bearer ${adminToken}`)
            .send({
                ...validVehicle,
                price: -100,
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Valid price is required");
    });

    it("should return 400 if quantity is invalid", async () => {
        const response = await request(app)
            .post("/api/vehicles")
            .set("Authorization", `Bearer ${adminToken}`)
            .send({
                ...validVehicle,
                quantity: -1,
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Valid quantity is required");
    });

    it("should return 401 if token is missing", async () => {
        const response = await request(app)
            .post("/api/vehicles")
            .send(validVehicle);

        expect(response.statusCode).toBe(401);
    });

    it("should return 403 if user is not admin", async () => {
        const response = await request(app)
            .post("/api/vehicles")
            .set("Authorization", `Bearer ${customerToken}`)
            .send(validVehicle);

        expect(response.statusCode).toBe(403);
    });

    it("should return 500 if database throws an error", async () => {
        jest.spyOn(Vehicle, "create").mockRejectedValueOnce(new Error("DB Error"));

        const response = await request(app)
            .post("/api/vehicles")
            .set("Authorization", `Bearer ${adminToken}`)
            .send(validVehicle);

        expect(response.statusCode).toBe(500);
        expect(response.body.message).toBe("Internal server error");

        Vehicle.create.mockRestore();
    });
});