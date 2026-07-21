const request = require("supertest");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = require("../../app");
const Vehicle = require("../../models/Vehicle");

describe("PUT /api/vehicles/:id", () => {
    let adminToken;
    let customerToken;
    let vehicle;

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

        vehicle = await Vehicle.create({
            make: "Toyota",
            model: "Fortuner",
            category: "SUV",
            price: 4200000,
            quantity: 5,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it("should update vehicle successfully", async () => {
        const response = await request(app)
            .put(`/api/vehicles/${vehicle._id}`)
            .set("Authorization", `Bearer ${adminToken}`)
            .send({
                make: "Honda",
                model: "City",
                category: "Sedan",
                price: 1800000,
                quantity: 10,
            });

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Vehicle updated successfully");
        expect(response.body.vehicle.make).toBe("Honda");
    });

    it("should return 404 if vehicle not found", async () => {
        const id = new mongoose.Types.ObjectId();

        const response = await request(app)
            .put(`/api/vehicles/${id}`)
            .set("Authorization", `Bearer ${adminToken}`)
            .send({
                make: "Honda",
                model: "City",
                category: "Sedan",
                price: 1800000,
                quantity: 10,
            });

        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("Vehicle not found");
    });

    it("should return 400 for invalid data", async () => {
        const response = await request(app)
            .put(`/api/vehicles/${vehicle._id}`)
            .set("Authorization", `Bearer ${adminToken}`)
            .send({
                make: "",
                model: "City",
                category: "Sedan",
                price: 1800000,
                quantity: 10,
            });

        expect(response.statusCode).toBe(400);
    });

    it("should return 401 without token", async () => {
        const response = await request(app)
            .put(`/api/vehicles/${vehicle._id}`)
            .send({
                make: "Honda",
                model: "City",
                category: "Sedan",
                price: 1800000,
                quantity: 10,
            });

        expect(response.statusCode).toBe(401);
    });

    it("should return 403 for customer", async () => {
        const response = await request(app)
            .put(`/api/vehicles/${vehicle._id}`)
            .set("Authorization", `Bearer ${customerToken}`)
            .send({
                make: "Honda",
                model: "City",
                category: "Sedan",
                price: 1800000,
                quantity: 10,
            });

        expect(response.statusCode).toBe(403);
    });

    it("should return 500 on database error", async () => {
        jest.spyOn(Vehicle, "findByIdAndUpdate")
            .mockRejectedValueOnce(new Error("DB Error"));

        const response = await request(app)
            .put(`/api/vehicles/${vehicle._id}`)
            .set("Authorization", `Bearer ${adminToken}`)
            .send({
                make: "Honda",
                model: "City",
                category: "Sedan",
                price: 1800000,
                quantity: 10,
            });

        expect(response.statusCode).toBe(500);

        Vehicle.findByIdAndUpdate.mockRestore();
    });
});