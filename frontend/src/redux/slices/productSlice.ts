import {createAsyncThunk, createSlice,PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    products:[],
    loading: false,
    singleProductDetails:{}
};


export const fetchProducts = createAsyncThunk("products/fetchProduct", async (data: any)=>{
    const {offset, limit } = data;
    const result = await fetch(`http://localhost:4000/products?offset=${offset}&limit=${limit}`);
    return result.json();
});

export const fetchSingleProduct = createAsyncThunk("products/fetchSingleProduct", async (id: number)=>{
    const result = await fetch(`http://localhost:4000/product/${id}`);
    return result.json();
});

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        getProduct:(state: any, action: PayloadAction<any>)=>{
            state.products = action.payload.results;
    }},
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state: any,action: PayloadAction<any>)=>{
         if(action.payload.results.length>0) {
            state.products = state.products.concat(action.payload.results);
            }
        }).addCase(fetchSingleProduct.fulfilled, (state: any,action: PayloadAction<any>)=>{
            state.products = [];
            state.singleProductDetails = action.payload.results[0];
           })
    }
})

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;