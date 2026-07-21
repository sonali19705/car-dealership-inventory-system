const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app");
const Vehicle = require("../../models/Vehicle");

describe("GET /api/vehicles/search", () => {

    beforeEach(async () => {

        await Vehicle.deleteMany({});

        await Vehicle.create([
            {
                make: "Toyota",
                model: "Fortuner",
                category: "SUV",
                price: 4200000,
                quantity: 5
            },
            {
                make: "Honda",
                model: "City",
                category: "Sedan",
                price: 1500000,
                quantity: 3
            }
        ]);

    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it("should search vehicles by make", async () => {

        const response = await request(app)
            .get("/api/vehicles/search?make=Toyota");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].make).toBe("Toyota");

    });
    it("should search vehicles by model", async () => {

        const response = await request(app)
            .get("/api/vehicles/search?model=City");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].model).toBe("City");

    });
    it("should search vehicles by model", async () => {

        const response = await request(app)
            .get("/api/vehicles/search?model=City");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].model).toBe("City");

    });
    it("should search vehicles by minimum price", async () => {

        const response = await request(app)
            .get("/api/vehicles/search?minPrice=2000000");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].make).toBe("Toyota");

    });
    it("should search vehicles by maximum price", async () => {

        const response = await request(app)
            .get("/api/vehicles/search?maxPrice=2000000");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].make).toBe("Honda");

    });
    it("should search vehicles by price range", async () => {

        const response = await request(app)
            .get("/api/vehicles/search?minPrice=1000000&maxPrice=2000000");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].make).toBe("Honda");

    });
    it("should search vehicles using multiple filters", async () => {

        const response = await request(app)
            .get("/api/vehicles/search?make=Toyota&category=SUV");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].make).toBe("Toyota");

    });
    it("should return an empty array when no vehicles match", async () => {

        const response = await request(app)
            .get("/api/vehicles/search?make=BMW");

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);

    });

});