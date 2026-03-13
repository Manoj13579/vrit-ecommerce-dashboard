"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  category: string;
  search: string;
  priceRange: {
    min: number;
    max: number;
  };
}

const initialState: FiltersState = {
  category: "all",
  search: "",
  priceRange: {
    min: 0,
    max: 10000,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      state.priceRange = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setCategory, setSearch, setPriceRange, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;