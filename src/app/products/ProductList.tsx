"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProductFilters from "./ProductFilters";
import ProductGrid from "./ProductGrid";
import Pagination from "@/components/Pagination";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";

interface Props {
  serverProducts: Product[];
  categories: string[];
  initialSort: "asc" | "desc";
  initialPage: number;
}

const PAGE_SIZE = 8;

export default function ProductList({
  serverProducts,
  categories,
  initialPage,
}: Props) {
  const filters = useSelector((state: RootState) => state.filters);

  const [filtered, setFiltered] = useState<Product[]>(serverProducts);
  const [page, setPage] = useState(initialPage);

  /** Filtering Logic */
  useEffect(() => {
    let results = [...serverProducts];

    // Category Filter
    if (filters.category !== "all") {
      results = results.filter((p) => p.category === filters.category);
    }

    // Search Filter
    if (filters.search.trim() !== "") {
      results = results.filter((p) =>
        p.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Price Filter
    results = results.filter(
      (p) =>
        p.price >= filters.priceRange.min &&
        p.price <= filters.priceRange.max
    );

    setFiltered(results);
    setPage(1); // reset page on new filters
  }, [filters, serverProducts]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  return (
    <div>
      <ProductFilters categories={categories} />

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No products found.</p>
      ) : (
        <>
          <ProductGrid products={paginated} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}