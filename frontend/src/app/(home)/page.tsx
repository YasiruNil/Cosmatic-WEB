"use client";

import { fetchProducts } from "@/redux/slices/productSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { Button } from 'antd';

const HomePage = () => {
  const router = useRouter();
  const [productOffset, setProductOffset] = useState(0);

  const dispatch = useAppDispatch();
  const products: any = useSelector((state: any) => state.products);

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
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 &&
          products.map((prd: any,index: number) => {
            return (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col justify-center items-center"
                onClick={() => router.push(`/details-page/${prd.ProductID}`)}
              >
                <CldImage
                  width="300"
                  height="300"
                  sizes="100%"
                  crop="fill"
                  src={`https://res.cloudinary.com/yasirucloudi/image/upload//${prd.Image}`}
                  alt="Description of my image"
                />
                <h3 className="text-xl font-semibold mt-4">{prd.Name}</h3>
                <p className="text-gray-600">{prd.Price}</p>
              </div>
            );
          })}
      </div>
      <Button onClick={()=>handleClick()} className="mt-5">Load More</Button>
    </div>
  );
};

export default HomePage;
