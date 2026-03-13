"use client";

import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import {
  setCategory,
  setSearch,
  setPriceRange,
} from "@/store/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface Props {
  categories: string[];
}

export default function ProductFilters({ categories }: Props) {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Category */}
      <div>
        <label className="text-sm font-medium">Category</label>
        <Select
          value={filters.category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        >
          <option value="all">All</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c.toUpperCase()}
            </option>
          ))}
        </Select>
      </div>

      {/* Search */}
      <div>
        <label className="text-sm font-medium">Search</label>
        <Input
          placeholder="Search by name..."
          value={filters.search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>

      {/* Min Price */}
      <div>
        <label className="text-sm font-medium">Min Price</label>
        <Input
          type="number"
          min={0}
          value={filters.priceRange.min}
          onChange={(e) =>
            dispatch(
              setPriceRange({
                min: Number(e.target.value),
                max: filters.priceRange.max,
              })
            )
          }
        />
      </div>

      {/* Max Price */}
      <div>
        <label className="text-sm font-medium">Max Price</label>
        <Input
          type="number"
          min={0}
          value={filters.priceRange.max}
          onChange={(e) =>
            dispatch(
              setPriceRange({
                min: filters.priceRange.min,
                max: Number(e.target.value),
              })
            )
          }
        />
      </div>
    </div>
  );
}