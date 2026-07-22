import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../components/layout/DashboardLayout";
import Loader from "../../components/common/Loader";
import Alert from "../../components/common/Alert";

import SearchFilters from "../../components/admin/SearchFilters";
import VehicleGrid from "../../components/vehicle/VehicleGrid";

import {
  getVehicles,
  purchaseVehicle,
  searchVehicles,
} from "../../services/vehicleService";

export default function CustomerDashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [purchasingId, setPurchasingId] = useState(null);

  const [filters, setFilters] = useState({
    make: "",
    model: "",
    category: "",
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getVehicles();

      setVehicles(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load vehicles."
      );
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
    } catch (err) {
      toast.error("Search failed.");
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

  const handlePurchase = async (vehicle) => {
    try {
      setPurchasingId(vehicle._id);

      await purchaseVehicle(vehicle._id);

      toast.success(
        `${vehicle.make} ${vehicle.model} purchased successfully!`
      );

      await fetchVehicles();
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Purchase failed."
      );
    } finally {
      setPurchasingId(null);
    }
  };

  return (
    <DashboardLayout>
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Available Vehicles
        </h1>

        <p className="mt-2 text-gray-500">
          Browse and purchase available vehicles.
        </p>

        <p className="mt-3 text-sm text-gray-500">
          Showing {vehicles.length} vehicle
          {vehicles.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Search */}

      <div className="mb-8">
        <SearchFilters
          filters={filters}
          onChange={handleFilterChange}
          onSearch={handleSearch}
          onReset={handleReset}
        />
      </div>

      {/* Error */}

      {error && (
        <div className="mb-6">
          <Alert
            type="error"
            message={error}
          />
        </div>
      )}

      {/* Vehicles */}

      {loading ? (
        <Loader />
      ) : (
        <VehicleGrid
          vehicles={vehicles}
          onPurchase={handlePurchase}
          purchasingId={purchasingId}
        />
      )}
    </DashboardLayout>
  );
}