const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");
const Vehicle = require("../../models/Vehicle");

describe("GET /api/vehicles", () => {

    beforeEach(async () => {
        await Vehicle.deleteMany({});

        await Vehicle.create({
            make: "Toyota",
            model: "Fortuner",
            category: "SUV",
            price: 4200000,
            quantity: 5
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it("should return all vehicles", async () => {

        const response = await request(app)
            .get("/api/vehicles");

        expect(response.statusCode).toBe(200);

        expect(response.body.length).toBe(1);

        expect(response.body[0]).toHaveProperty("make", "Toyota");
    });

    it("should return an empty array when no vehicles exist", async () => {
        await Vehicle.deleteMany({});

        const response = await request(app)
            .get("/api/vehicles");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });

});