const request = require("supertest");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = require("../../app");
const Vehicle = require("../../models/Vehicle");

describe("POST /api/vehicles/:id/purchase", () => {
    let token;
    let vehicle;

    beforeAll(() => {
        token = jwt.sign(
            {
                id: "1",
                role: "customer",
            },
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

    it("should purchase vehicle successfully", async () => {
        const response = await request(app)
            .post(`/api/vehicles/${vehicle._id}/purchase`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Vehicle purchased successfully");
        expect(response.body.vehicle.quantity).toBe(4);
    });

    it("should return 404 if vehicle not found", async () => {
        const id = new mongoose.Types.ObjectId();

        const response = await request(app)
            .post(`/api/vehicles/${id}/purchase`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("Vehicle not found");
    });

    it("should return 400 if vehicle is out of stock", async () => {
        vehicle.quantity = 0;
        await vehicle.save();

        const response = await request(app)
            .post(`/api/vehicles/${vehicle._id}/purchase`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("Vehicle is out of stock");
    });

    it("should return 401 without token", async () => {
        const response = await request(app)
            .post(`/api/vehicles/${vehicle._id}/purchase`);

        expect(response.statusCode).toBe(401);
    });

    it("should return 500 on database error", async () => {
        jest.spyOn(Vehicle, "findById")
            .mockRejectedValueOnce(new Error("Database Error"));

        const response = await request(app)
            .post(`/api/vehicles/${vehicle._id}/purchase`)
            .set("Authorization", `Bearer ${token}`);

        expect(response.statusCode).toBe(500);

        Vehicle.findById.mockRestore();
    });
});