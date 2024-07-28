import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IProduct } from "../../../interface/index";
import axiosInstance from "../../../config/axios.config";
import { RootState } from "../../store";

interface productsState {
  loading: boolean;
  data: IProduct[];
  error: null;
}

const initialState: productsState = {
  loading: true,
  data: [],
  error: null,
};

export const getProductList = createAsyncThunk(
  "products/getProductList",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    // get Request
    try {
      const { data } = await axiosInstance.get(
        "/products?limit=10&select=title,price,thumbnail"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products", // ** Attached with Store
  initialState,
  reducers: {},
  extraReducers: {
    // pending
    [`${getProductList.pending}`]: (state) => {
      state.loading = true;
    },

    // fullfilled
    [`${getProductList.fulfilled}`]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    // rejected
    [`${getProductList.rejected}`]: (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    },
  },
});
export const productsSelector = ({ products }: RootState) => products;
export default productsSlice.reducer;

// Query => GET Request

// Mutation
// CRUD
// Create (Mutation), Read (Query), Update(Mutation), Delete(Mutation)
