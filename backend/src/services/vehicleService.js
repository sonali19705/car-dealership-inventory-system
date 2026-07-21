const Vehicle = require("../models/Vehicle");

const getAllVehicles = async () => {
    return Vehicle.find();
};
const searchVehicles = async (queryParams) => {
    const query = {};

    // Search by make
    if (queryParams.make) {
        query.make = new RegExp(queryParams.make, "i");
    }

    // Search by model
    if (queryParams.model) {
        query.model = new RegExp(queryParams.model, "i");
    }

    // Search by category
    if (queryParams.category) {
        query.category = new RegExp(queryParams.category, "i");
    }

    // Price filter
    if (queryParams.minPrice || queryParams.maxPrice) {
        query.price = {};

        if (queryParams.minPrice) {
            query.price.$gte = Number(queryParams.minPrice);
        }

        if (queryParams.maxPrice) {
            query.price.$lte = Number(queryParams.maxPrice);
        }
    }

    return Vehicle.find(query);
};
const createVehicle = async (vehicleData) => {
    return await Vehicle.create(vehicleData);
};
module.exports = {
    getAllVehicles,
    searchVehicles,
    createVehicle,
};