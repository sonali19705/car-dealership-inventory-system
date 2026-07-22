import {
    Car,
    IndianRupee,
    Package,
    Pencil,
    Trash2,
    PlusCircle,
} from "lucide-react";

import Card from "../common/Card";
import Button from "../common/Button";

export default function VehicleCard({
    vehicle,
    isAdmin = false,
    onPurchase,
    onEdit,
    onDelete,
    onRestock,
    purchasingId,
}) {
    const isAvailable = vehicle.quantity > 0;

    return (
        <Card className="p-6 flex flex-col justify-between h-full">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div>
                    <div className="flex items-center gap-2 text-blue-600 font-medium">
                        <Car size={18} />
                        <span>{vehicle.category}</span>
                    </div>

                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                        {vehicle.make} {vehicle.model}
                    </h3>
                </div>

                <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
    ${vehicle.quantity > 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                >
                    {vehicle.quantity > 0
                        ? "In Stock"
                        : "Out of Stock"}
                </span>
            </div>

            {/* Details */}
            <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                        <IndianRupee size={18} />
                        <span>Price</span>
                    </div>

                    <span className="font-semibold">
                        ₹{vehicle.price.toLocaleString("en-IN")}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Package size={18} />
                        <span>Available</span>
                    </div>

                    <span className="font-semibold">
                        {vehicle.quantity} Units
                    </span>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-6">
                {!isAdmin ? (
                    <Button
                        onClick={() => onPurchase(vehicle)}
                        disabled={
                            vehicle.quantity === 0 ||
                            purchasingId === vehicle._id
                        }
                        className="w-full"
                    >
                        {purchasingId === vehicle._id
                            ? "Purchasing..."
                            : vehicle.quantity === 0
                                ? "Out of Stock"
                                : "Purchase Vehicle"}
                    </Button>
                ) : (
                    <div className="grid grid-cols-3 gap-2">
                        <Button
                            className="flex items-center justify-center gap-1"
                            onClick={() => onEdit?.(vehicle)}
                        >
                            <Pencil size={16} />
                            Edit
                        </Button>

                        <Button
                            className="flex items-center justify-center gap-1"
                            onClick={() => onRestock?.(vehicle)}
                        >
                            <PlusCircle size={16} />
                            Stock
                        </Button>

                        <Button
                            className="flex items-center justify-center gap-1 bg-red-600 hover:bg-red-700"
                            onClick={() => onDelete?.(vehicle)}
                        >
                            <Trash2 size={16} />
                            Delete
                        </Button>
                    </div>
                )}
            </div>
        </Card>
    );
}