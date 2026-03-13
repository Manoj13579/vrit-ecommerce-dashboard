import { fetchProducts, fetchCategories } from "@/lib/fetcher";
import ProductList from "@/app/products/ProductList";

export const dynamic = "force-dynamic";
export const fetchCache = "default-no-store";

interface Props {
  searchParams: Promise<{
    sort?: "asc" | "desc";
    page?: string;
  }>;
}

export default async function ProductsPage({ searchParams }: Props) {
  const params = await searchParams;

  const sort = params.sort || "asc";
  const page = Number(params.page) || 1;

  const products = await fetchProducts(sort);
  const categories = await fetchCategories();

  return (
    <ProductList
      serverProducts={products}
      categories={categories}
      initialSort={sort}
      initialPage={page}
    />
  );
}