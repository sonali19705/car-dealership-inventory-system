import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Button from "../common/Button";
import Input from "../common/Input";

const initialForm = {
  make: "",
  model: "",
  category: "",
  price: "",
  quantity: "",
};

export default function VehicleModal({
  open,
  onClose,
  onSubmit,
  loading = false,
  vehicle = null,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (vehicle) {
      setForm({
        make: vehicle.make,
        model: vehicle.model,
        category: vehicle.category,
        price: vehicle.price,
        quantity: vehicle.quantity,
      });
    } else {
      setForm(initialForm);
    }
  }, [vehicle, open]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity),
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">

          <div>

            <h2 className="text-2xl font-bold">
              {vehicle ? "Edit Vehicle" : "Add Vehicle"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {vehicle
                ? "Update vehicle details."
                : "Add a new vehicle to inventory."}
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={22} />
          </button>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="p-6"
        >

          <div className="grid gap-5 md:grid-cols-2">

            <Input
              label="Make"
              name="make"
              value={form.make}
              onChange={handleChange}
              required
            />

            <Input
              label="Model"
              name="model"
              value={form.model}
              onChange={handleChange}
              required
            />

            <Input
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            />

            <Input
              type="number"
              label="Price"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />

            <Input
              type="number"
              label="Quantity"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              required
            />

          </div>

          <div className="mt-8 flex justify-end gap-3">

            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : vehicle
                ? "Update Vehicle"
                : "Add Vehicle"}
            </Button>

          </div>

        </form>

      </div>

    </div>
  );
}