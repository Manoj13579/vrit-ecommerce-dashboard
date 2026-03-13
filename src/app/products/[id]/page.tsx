import { fetchProductById } from "@/lib/fetcher";
import { Product } from "@/types/product";
import AddToCartButton from "@/components/AddToCartButton";

export const dynamic = "force-dynamic";
export const fetchCache = "default-no-store";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;

  const product: Product = await fetchProductById(id);

  return (
    <div className="grid md:grid-cols-2 gap-10 bg-white p-6 shadow rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 mx-auto object-contain"
      />

      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-gray-500 capitalize mt-1">{product.category}</p>

        <p className="text-3xl font-bold mt-4">${product.price}</p>

        <p className="mt-4 text-gray-700">{product.description}</p>

        {/* CLIENT COMPONENT */}
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}