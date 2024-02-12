import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartItem } from "@/models/Product";
import { setLocalStorageKey } from "@/utils/common";
import { CART_KEY } from "@/constants/common";
import { RootState } from "../store";

export interface ICartState {
  cartItems: CartItem[];
}

const initialState: ICartState = {
  cartItems: [],
};

export const updateCart = createAsyncThunk(
  "cart/updateInsuranceItems",
  async (cart: CartItem[]) => {
    setLocalStorageKey(CART_KEY, cart);
    return cart;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.cartItems = action.payload;
    });
  },
});

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
