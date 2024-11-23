import {createAsyncThunk, createSlice,PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    products:[]
};


export const fetchProduct = createAsyncThunk("products/fetchProduct", async (data: any)=>{
    const {offset, limit } = data;
    const result = await fetch(`http://localhost:4000/products?offset=${offset}&limit=${limit}`);
    return result.json();
})

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        getProduct:(state: any, action: PayloadAction<any>)=>{
        state.products.push(action.payload.results);
    }},
    extraReducers: (builder)=>{
        builder.addCase(fetchProduct.fulfilled, (state: any,action: PayloadAction<any>)=>{
         if(action.payload.results.length>0) {
                state.products.push(action.payload.results);
            }
        })
    }
})

export const { getProduct } = productSlice.actions;
export default productSlice.reducer;