import { Search, RotateCcw } from "lucide-react";
import Button from "../common/Button";
import Input from "../common/Input";

export default function SearchFilters({
  filters,
  onChange,
  onSearch,
  onReset,
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Search & Filters
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Search vehicles by make, model, category or price range.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">

        <Input
          name="make"
          placeholder="Make"
          value={filters.make}
          onChange={onChange}
        />

        <Input
          name="model"
          placeholder="Model"
          value={filters.model}
          onChange={onChange}
        />

        <Input
          name="category"
          placeholder="Category"
          value={filters.category}
          onChange={onChange}
        />

        <Input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={onChange}
        />

        <Input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={onChange}
        />

      </div>

      <div className="mt-6 flex flex-wrap justify-end gap-3">

        <Button
          variant="secondary"
          onClick={onReset}
        >
          <RotateCcw size={18} />
          Reset
        </Button>

        <Button onClick={onSearch}>
          <Search size={18} />
          Search
        </Button>

      </div>

    </div>
  );
}