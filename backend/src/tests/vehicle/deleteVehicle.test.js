const request = require("supertest");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = require("../../app");
const Vehicle = require("../../models/Vehicle");

describe("DELETE /api/vehicles/:id", () => {
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

    it("should delete vehicle successfully", async () => {
        const response = await request(app)
            .delete(`/api/vehicles/${vehicle._id}`)
            .set("Authorization", `Bearer ${adminToken}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("Vehicle deleted successfully");
    });

    it("should return 404 if vehicle not found", async () => {
        const id = new mongoose.Types.ObjectId();

        const response = await request(app)
            .delete(`/api/vehicles/${id}`)
            .set("Authorization", `Bearer ${adminToken}`);

        expect(response.statusCode).toBe(404);
    });

    it("should return 401 without token", async () => {
        const response = await request(app)
            .delete(`/api/vehicles/${vehicle._id}`);

        expect(response.statusCode).toBe(401);
    });

    it("should return 403 for customer", async () => {
        const response = await request(app)
            .delete(`/api/vehicles/${vehicle._id}`)
            .set("Authorization", `Bearer ${customerToken}`);

        expect(response.statusCode).toBe(403);
    });

    it("should return 500 on database error", async () => {
        jest.spyOn(Vehicle, "findByIdAndDelete")
            .mockRejectedValueOnce(new Error("DB Error"));

        const response = await request(app)
            .delete(`/api/vehicles/${vehicle._id}`)
            .set("Authorization", `Bearer ${adminToken}`);

        expect(response.statusCode).toBe(500);

        Vehicle.findByIdAndDelete.mockRestore();
    });
});