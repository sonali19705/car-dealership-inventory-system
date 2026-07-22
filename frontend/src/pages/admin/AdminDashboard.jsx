import { useEffect, useState } from "react";
import {
    Car,
    Package,
    AlertCircle,
    IndianRupee,
    Plus,
} from "lucide-react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";

import StatsCard from "../../components/admin/StatsCard";
import SearchFilters from "../../components/admin/SearchFilters";
import VehicleModal from "../../components/admin/VehicleModal";

import VehicleGrid from "../../components/vehicle/VehicleGrid";

import {
  getVehicles,
  searchVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
  restockVehicle,
} from "../../services/vehicleService";

export default function AdminDashboard() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({
        make: "",
        model: "",
        category: "",
        minPrice: "",
        maxPrice: "",
    });

    const [openModal, setOpenModal] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchVehicles();
    }, []);

    const fetchVehicles = async () => {
        try {
            setLoading(true);

            const data = await getVehicles();

            setVehicles(data);
        } catch (error) {
            toast.error("Failed to load vehicles");
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;

        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSearch = async () => {
        try {
            setLoading(true);

            const data = await searchVehicles(filters);

            setVehicles(data);

            if (data.length === 0) {
                toast("No matching vehicles found.");
            }
        } catch (error) {
            toast.error("Search failed");
        } finally {
            setLoading(false);
        }
    };

    const handleReset = async () => {
        setFilters({
            make: "",
            model: "",
            category: "",
            minPrice: "",
            maxPrice: "",
        });

        await fetchVehicles();
    };

    const handleAddVehicle = () => {
        setSelectedVehicle(null);
        setOpenModal(true);
    };

    const handleEdit = (vehicle) => {
        setSelectedVehicle(vehicle);
        setOpenModal(true);
    };

    const handleDelete = async (vehicle) => {
        const confirmed = window.confirm(
            `Are you sure you want to delete ${vehicle.make} ${vehicle.model}?`
        );

        if (!confirmed) return;

        try {
            await deleteVehicle(vehicle._id);

            toast.success("Vehicle deleted successfully");

            await fetchVehicles();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to delete vehicle"
            );

        }
    };

    const handleRestock = async (vehicle) => {
  const quantity = window.prompt(
    `Enter quantity to add for ${vehicle.make} ${vehicle.model}:`
  );

  if (quantity === null) return;

  const parsedQuantity = Number(quantity);

  if (!Number.isInteger(parsedQuantity) || parsedQuantity <= 0) {
    toast.error("Please enter a valid quantity.");
    return;
  }

  try {
    await restockVehicle(vehicle._id, parsedQuantity);

    toast.success("Vehicle restocked successfully.");

    await fetchVehicles();

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      "Failed to restock vehicle"
    );

  }
};

    const handleModalSubmit = async (formData) => {
        try {
            setSaving(true);

            if (selectedVehicle) {
                await updateVehicle(selectedVehicle._id, formData);

                toast.success("Vehicle updated successfully");
            } else {
                await createVehicle(formData);

                toast.success("Vehicle added successfully");
            }

            setOpenModal(false);
            setSelectedVehicle(null);

            await fetchVehicles();

        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Operation failed"
            );
        } finally {
            setSaving(false);
        }
    };
    const totalVehicles = vehicles.length;

    const inStock = vehicles.filter(
        (vehicle) => vehicle.quantity > 0
    ).length;

    const outOfStock = vehicles.filter(
        (vehicle) => vehicle.quantity === 0
    ).length;

    const inventoryValue = vehicles.reduce(
        (total, vehicle) => total + vehicle.price * vehicle.quantity,
        0
    );

    return (
        <DashboardLayout>
            {/* Header */}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900">
                        Admin Dashboard
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Manage inventory and vehicle records.
                    </p>
                </div>

                <Button
                    onClick={handleAddVehicle}
                    className="flex items-center gap-2 px-6 py-3"
                >
                    <Plus size={18} />
                    Add Vehicle
                </Button>
            </div>

            {/* Statistics */}

            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <StatsCard
                    icon={<Car size={28} />}
                    title="Total Vehicles"
                    value={totalVehicles}
                />

                <StatsCard
                    icon={<Package size={28} />}
                    title="In Stock"
                    value={inStock}
                />

                <StatsCard
                    icon={<AlertCircle size={28} />}
                    title="Out Of Stock"
                    value={outOfStock}
                />

                <StatsCard
                    icon={<IndianRupee size={28} />}
                    title="Inventory Value"
                    value={`₹${inventoryValue.toLocaleString("en-IN")}`}
                />
            </div>

            {/* Search */}

            <div className="mt-8">
                <SearchFilters
                    filters={filters}
                    onChange={handleFilterChange}
                    onSearch={handleSearch}
                    onReset={handleReset}
                />
            </div>

            {/* Vehicles */}

            <div className="mt-10">
                <div className="mb-5 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Vehicles
                    </h2>

                    <span className="text-sm text-gray-500">
                        {totalVehicles} Vehicles
                    </span>
                </div>

                {loading ? (
                    <Loader />
                ) : (
                    <VehicleGrid
                        vehicles={vehicles}
                        isAdmin={true}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onRestock={handleRestock}
                    />
                )}
            </div>

            {/* Add / Edit Vehicle Modal */}

            <VehicleModal
                open={openModal}
                vehicle={selectedVehicle}
                loading={saving}
                onClose={() => {
                    setOpenModal(false);
                    setSelectedVehicle(null);
                }}
                onSubmit={handleModalSubmit}
            />
        </DashboardLayout>
    );
}