const vehicleService = require("../services/vehicleService");

const getAllVehicles = async (req, res) => {
    try {
        const vehicles = await vehicleService.getAllVehicles();
        return res.status(200).json(vehicles);
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};
const searchVehicles = async (req, res) => {
    try {
        const vehicles = await vehicleService.searchVehicles(req.query);

        return res.status(200).json(vehicles);
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
const createVehicle = async (req, res) => {
    try {
        const vehicle = await vehicleService.createVehicle(req.body);

        return res.status(201).json({
            message: "Vehicle created successfully",
            vehicle,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
const updateVehicle = async (req, res) => {
    try {
        const vehicle = await vehicleService.updateVehicle(
            req.params.id,
            req.body
        );

        if (!vehicle) {
            return res.status(404).json({
                message: "Vehicle not found",
            });
        }

        return res.status(200).json({
            message: "Vehicle updated successfully",
            vehicle,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
const deleteVehicle = async (req, res) => {
    try {
        const vehicle = await vehicleService.deleteVehicle(req.params.id);

        if (!vehicle) {
            return res.status(404).json({
                message: "Vehicle not found",
            });
        }

        return res.status(200).json({
            message: "Vehicle deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
module.exports = {
    getAllVehicles,
    searchVehicles,
    createVehicle,
    updateVehicle,
    deleteVehicle,
};