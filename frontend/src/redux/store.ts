import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: productSlice
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()