import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ITestState {
  value: boolean;
}

const initialState: ITestState = {
  value: false,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = testSlice.actions;

export const selectValue = (state: RootState) => state.test.value;

export default testSlice.reducer;
