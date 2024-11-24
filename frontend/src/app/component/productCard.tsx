import React from "react";

import { CldImage } from "next-cloudinary";

import { Products } from "../models/productModels";

interface Props {
  product: Products;
}

const ProductCard = (props: Props): React.JSX.Element => {
    const { product } = props;
  return (
    <div className="flex justify-center flex-col">
      <CldImage
        width="300"
        height="300"
        sizes="100%"
        crop="fill"
        src={`https://res.cloudinary.com/yasirucloudi/image/upload//${product.image}`}
        alt="Description of my image"
      />
      <h3 className="text-xl font-semibold mt-4">{product.product_name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
