"use client";

import { useEffect } from "react";
import { useParams } from 'next/navigation';

import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import ProductCard from "@/app/component/productCard";
import { fetchSingleProduct } from "@/redux/slices/productSlice";
import { Spin } from "antd";

const DetailsPage = () => {
  const params = useParams<{ id: string  }>();
  const dispatch = useAppDispatch();
  const productsDetails: any = useAppSelector(
    (state: any) => state.singleProductDetails
  );

  
  useEffect(() => {
    dispatch(fetchSingleProduct(Number(params.id)));
  }, []);

  return (
    <>
      {productsDetails ? (
        <div className="flex m-3">
          <div className="w-[400px] flex justify-center p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
          <ProductCard product={productsDetails} />
          </div>
          <div className="m-2">
            <h2 className="m-1">Usage Instruction: {productsDetails.usage_instructions}</h2>
            <h2 className="m-1">Description: {productsDetails.product_description}</h2>
            <h2 className="m-1">Expiry Date: {productsDetails.expiry_date}</h2>
            <h2 className="m-1">quantity: {productsDetails.quantity}</h2>
          </div>
        </div>
      ) : (
        <><Spin size="large" /></>
      )}
    </>
  );
};
export default DetailsPage;
