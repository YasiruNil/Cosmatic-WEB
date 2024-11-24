import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  singleProductDetails: {},
  filterProductsByBrands: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProduct",
  async (data: { offset: number; limit: number }) => {
    const { offset, limit } = data;
    const result = await fetch(
      `http://localhost:4000/products?offset=${offset}&limit=${limit}`
    );
    return result.json();
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id: number) => {
    const result = await fetch(`http://localhost:4000/product/${id}`);
    return result.json();
  }
);

export const fetchFilteredByBrand = createAsyncThunk(
  "products/fetchFilteredByBrand",
  async (data: { offset: number; limit: number; id: number }) => {
    const { offset, limit, id } = data;
    const result = await fetch(
      `http://localhost:4000/product-list-by-brandId/${id}?offset=${offset}&limit=${limit}`
    );
    return result.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProduct: (state: any, action: PayloadAction<any>) => {
      state.products = action.payload.results;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProducts.fulfilled,
        (state: any, action: PayloadAction<any>) => {
          state.singleProductDetails = [];
          if (action.payload.results.length > 0) {
            state.products = state.products.concat(action.payload.results);
          }
        }
      )
      .addCase(
        fetchSingleProduct.fulfilled,
        (state: any, action: PayloadAction<any>) => {
          state.products = [];
          state.filterProductsByBrands = [];
          state.singleProductDetails = action.payload.results[0];
        }
      )
      .addCase(
        fetchFilteredByBrand.fulfilled,
        (state: any, action: PayloadAction<any>) => {
          state.filterProductsByBrands = action.payload.results;
        }
      );
  },
});

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
