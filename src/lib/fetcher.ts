import { apiFetch } from "./api";
import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async (sort?: "asc" | "desc"): Promise<Product[]> => {
  const url = sort ? `${BASE_URL}/products?sort=${sort}` : `${BASE_URL}/products`;
  return apiFetch<Product[]>(url, { cache: "no-cache" });
};

export const fetchProductById = async (id: string): Promise<Product> => {
  return apiFetch<Product>(`${BASE_URL}/products/${id}`, { cache: "no-cache" });
};

export const fetchCategories = async (): Promise<string[]> => {
  return apiFetch<string[]>(`${BASE_URL}/products/categories`, { cache: "no-cache" });
};