import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "@/models/Product";
import { setLocalStorageKey } from "@/utils/common";
import { CART_KEY } from "@/constants/common";
import { RootState } from "../store";

export interface IAppState {
  categories: string[];
  cartItems: CartItem[];
}

const initialState: IAppState = {
  categories: [],
  cartItems: [],
};

export const updateCart = createAsyncThunk(
  "app/updateCart",
  async (cart: CartItem[]) => {
    setLocalStorageKey(CART_KEY, cart);
    return cart;
  }
);

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  },
});

export const { setCategories } = appSlice.actions;

export const selectCategories = (state: RootState) => state.app.categories;
export const selectCartItems = (state: RootState) => state.app.cartItems;

export default appSlice.reducer;
