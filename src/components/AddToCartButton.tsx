"use client";

import Button from "./ui/Button";
import { addToCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";
import { Product } from "@/types/product";
import toast from "react-hot-toast";

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useDispatch();

  return (
    <Button
      className="mt-6 w-full md:w-48"
      onClick={() => {
    dispatch(addToCart({ product, quantity: 1 }));
    toast.success("Product added to cart");
  }}
    >
      Add to Cart
    </Button>
  );
}