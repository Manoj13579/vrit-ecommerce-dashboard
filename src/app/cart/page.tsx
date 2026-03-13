"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "@/store/cartSlice";
import Button from "@/components/ui/Button";
import { formatCurrency } from "@/utils/currency";
import Link from "next/link";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-6 shadow rounded-lg h-screen">
      <Link href="/products" className="text-sm text-gray-600 mb-6 cursor-pointer">continue shopping</Link>
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-500 text-center py-10">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="h-20 w-20 object-contain"
                  />
                  <div>
                    <h2 className="font-semibold">{item.product.title}</h2>
                    <p className="text-gray-600">
                      {formatCurrency(item.product.price)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Quantity Selector */}
                  <input
                    type="number"
                    min={1}
                    className="border rounded-md px-2 py-1 w-20"
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(
                        updateQuantity({
                          id: item.product.id,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                  />

                  {/* Remove Button */}
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromCart(item.product.id))}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 flex justify-between items-center">
            <h2 className="text-xl font-bold">
              Total: {formatCurrency(total)}
            </h2>

            <Button variant="danger" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}