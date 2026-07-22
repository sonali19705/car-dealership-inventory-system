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
const updateVehicle = async (id, vehicleData) => {
    return await Vehicle.findByIdAndUpdate(
        id,
        vehicleData,
        {
            new: true,
            runValidators: true,
        }
    );
};
const deleteVehicle = async (id) => {
    return await Vehicle.findByIdAndDelete(id);
};

const purchaseVehicle = async (id) => {
    const vehicle = await Vehicle.findById(id);

    if (!vehicle) {
        return {
            status: 404,
            message: "Vehicle not found",
        };
    }

    if (vehicle.quantity <= 0) {
        return {
            status: 400,
            message: "Vehicle is out of stock",
        };
    }

    vehicle.quantity -= 1;

    await vehicle.save();

    return {
        status: 200,
        vehicle,
    };
};

const restockVehicle = async (id, quantity) => {

    const vehicle = await Vehicle.findById(id);

    if (!vehicle) {
        return {
            status: 404,
            message: "Vehicle not found"
        };
    }

    if (!quantity || quantity <= 0) {
        return {
            status: 400,
            message: "Quantity must be greater than 0"
        };
    }

    vehicle.quantity += quantity;

    await vehicle.save();

    return {
        status: 200,
        vehicle
    };
};

module.exports = {
    getAllVehicles,
    searchVehicles,
    createVehicle,
    updateVehicle,
    deleteVehicle,
    purchaseVehicle,
    restockVehicle,
};