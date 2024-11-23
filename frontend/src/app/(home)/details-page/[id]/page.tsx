"use client";
import { fetchSingleProduct } from "@/redux/slices/productSlice";
import { useAppDispatch } from "@/redux/store";
import { CldImage } from "next-cloudinary";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'next/navigation';

const DetailsPage = () => {
  const params = useParams<{ id: string  }>();
  const dispatch = useAppDispatch();
  const productsDetails: any = useSelector(
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
            <CldImage
              width="300"
              height="300"
              sizes="100%"
              crop="fill"
              src={`https://res.cloudinary.com/yasirucloudi/image/upload//${productsDetails.Image}`}
              alt="Description of my image"
            />
            <h3 className="text-xl font-semibold mt-4">
              {productsDetails.Name}
            </h3>
            <p className="text-gray-600">{productsDetails.Price}</p>
          </div>
        </>
      ) : (
        <>loading</>
      )}
    </div>
  );
};
export default DetailsPage;
