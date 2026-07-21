const Vehicle = require("../models/Vehicle");

const getAllVehicles = async () => {
    return Vehicle.find();
};

module.exports = {
    getAllVehicles
};