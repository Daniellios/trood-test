import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ItableData {
  id: number;
  name: string;
  status: string;
  type: string;
  conditions: string;
  volume: number;
  roi: number;
  free: number;
  hedge: number;
}

const initialState: ItableData[] = [
  {
    id: 1,
    name: "Pyshky.net",
    status: "green",
    type: "TRST",
    conditions: "x2,6 months",
    volume: 120000,
    roi: 4,
    free: 20,
    hedge: 20,
  },
  {
    id: 2,
    name: "NFT-Flowershop",
    status: "yellow",
    type: "THT",
    conditions: "x4,2 years",
    volume: 80000,
    roi: 23,
    free: 12,
    hedge: 0,
  },
  {
    id: 4,
    name: "Web3 P2P University",
    status: "red",
    type: "TRST",
    conditions: "x2,1 years",
    volume: 200000,
    roi: 6,
    free: 1,
    hedge: 0,
  },
];

export const tableSlice = createSlice({
  name: "tableData",
  initialState: initialState,
  reducers: {
    calculateTotal: (state) => {
      state = [];
    },
  },
});

export const selectTableData = (state: RootState) => state.tableData;

// Action creators are generated for each case reducer function
export const { calculateTotal } = tableSlice.actions;

export default tableSlice.reducer;
