interface Products {
  image: string;
  price: number;
  brandID: number;
  quantity: number;
  productID: number;
  categoryID: number;
  product_name: string;
}

interface ProductDetails {
  image: string;
  price: number;
  brandID: number;
  quantity: number;
  productID: number;
  expiry_date: Date;
  categoryID: number;
  product_name: string;
  productDetailsID: number;
  usage_instructions: string;
  product_description: string;
}

export type { Products, ProductDetails };
