"use client";

import { useEffect, useState } from "react";

import { Button } from "antd";
import { useRouter } from "next/navigation";

import {
  fetchFilteredByBrand,
  fetchProducts,
} from "@/redux/slices/productSlice";
import { Products } from "../models/productModels";
import ProductCard from "../component/productCard";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

const HomePage = () => {
  const router = useRouter();
  const [productOffset, setProductOffset] = useState(0);

  const dispatch = useAppDispatch();
  const products: Products[] = useAppSelector((state: any) => state.products);
  const productsByBrands: Products[] = useAppSelector(
    (state: any) => state.filterProductsByBrands
  );

  const handleClick = () => {
    // Update the state and call the callback after the update
    setProductOffset((prevCount) => {
      const newCount = prevCount + 3;
      dispatch(fetchProducts({ offset: newCount, limit: 3 })); // Calling the callback
      return newCount; // Return the new state value
    });
  };
  
  useEffect(() => {
    dispatch(fetchProducts({ offset: productOffset, limit: 3 }));
    dispatch(fetchFilteredByBrand({ offset: 0, limit: 3, id: 2 }));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
      {/* LIST ALL THE PRODUCTS */}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 &&
            products.map((prd: Products, index: number) => {
              return (
                <div
                  key={index}
                  className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col justify-center items-center"
                  onClick={() => router.push(`/details-page/${prd.productID}`)}
                >
                  <ProductCard product={prd} />
                </div>
              );
            })}
        </div>
        <Button onClick={() => handleClick()} className="mt-5">
          Load More
        </Button>
      </div>
      {/* FILTER PRODUCTS BY BRAND */}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsByBrands.length > 0 &&
            productsByBrands.map((prd: Products, index: number) => {
              return (
                <div
                  key={index}
                  className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col justify-center items-center"
                  onClick={() => router.push(`/details-page/${prd.productID}`)}
                >
                  <ProductCard product={prd} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
