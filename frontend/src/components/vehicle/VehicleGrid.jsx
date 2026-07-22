import VehicleCard from "./VehicleCard";

export default function VehicleGrid({
  vehicles = [],
  isAdmin = false,
  onPurchase,
  onEdit,
  onDelete,
  onRestock,
  purchasingId,
}){
  if (!vehicles.length) {
    return (
      <div className="bg-white rounded-lg border border-dashed border-gray-300 p-10 text-center">
        <h2 className="text-lg font-semibold text-gray-700">
          No vehicles found
        </h2>

        <p className="mt-2 text-gray-500">
          There are currently no vehicles available.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle._id}
          vehicle={vehicle}
          isAdmin={isAdmin}
          onPurchase={onPurchase}
          onEdit={onEdit}
          onDelete={onDelete}
          onRestock={onRestock}
          purchasingId={purchasingId}
        />
      ))}
    </div>
  );
}