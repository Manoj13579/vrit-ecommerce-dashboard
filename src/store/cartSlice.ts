"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "@/types/cart";
import { Product } from "@/types/product";
import { loadFromStorage, saveToStorage } from "@/utils/localStorage";

const STORAGE_KEY = "cart_items";

const initialState: CartState = {
  items: loadFromStorage<CartItem[]>(STORAGE_KEY, []),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; quantity: number }>
    ) => {
      const { product, quantity } = action.payload;
      const existing = state.items.find((item) => item.product.id === product.id);

      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ product, quantity });
      }

      saveToStorage(STORAGE_KEY, state.items);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.product.id !== action.payload);
      saveToStorage(STORAGE_KEY, state.items);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((i) => i.product.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      saveToStorage(STORAGE_KEY, state.items);
    },

    clearCart: (state) => {
      state.items = [];
      saveToStorage(STORAGE_KEY, state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;