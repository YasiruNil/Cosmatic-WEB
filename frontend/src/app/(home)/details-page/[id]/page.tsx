"use client";

import { useEffect } from "react";
import { useParams } from 'next/navigation';

import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import ProductCard from "@/app/component/productCard";
import { fetchSingleProduct } from "@/redux/slices/productSlice";

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
    <div>
      {productsDetails ? (
        <>
          <div className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
          <ProductCard product={productsDetails} />
          </div>
        </>
      ) : (
        <>loading</>
      )}
    </div>
  );
};
export default DetailsPage;
