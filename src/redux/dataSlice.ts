import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface IBarData {
  name: string;
  color: string;
  value: number;
  id: string;
}

const initialState: IBarData[] = [
  { name: "Sold", color: "#BD1FBE", value: 677, id: nanoid() },
  { name: "Got free", color: "#FC64FF", value: 23, id: nanoid() },
  { name: "Burned", color: "#50F513", value: 202, id: nanoid() },
  { name: "Free float", color: "#7A7A7A", value: 323, id: nanoid() },
];

export const dataSlice = createSlice({
  name: "bardata",
  initialState: initialState,
  reducers: {
    calculateTotal: (state) => {
      state = [];
    },
  },
});

export const totalValue = (state: RootState) =>
  state.barData.reduce((sum, segment) => (sum += segment.value), 0);

export const barData = (state: RootState) => state.barData;

// Action creators are generated for each case reducer function
export const { calculateTotal } = dataSlice.actions;

export default dataSlice.reducer;
