"use client";

import { Product } from "@/types/product";
import Rating from "./Rating";
import Button from "./ui/Button";
import { addToCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-48 mx-auto object-contain"
        />
      </Link>

      <h3 className="mt-4 font-semibold text-gray-800 line-clamp-1">
        {product.title}
      </h3>

      <p className="text-sm text-gray-500 capitalize">{product.category}</p>

      <Rating rate={product.rating.rate} count={product.rating.count} />

      <p className="mt-2 font-bold text-xl">${product.price}</p>

      <Button
  className="mt-auto w-full"
  onClick={() => {
    dispatch(addToCart({ product, quantity: 1 }));
    toast.success("Product added to cart");
  }}
>
  Add to Cart
</Button>
    </div>
  );
}