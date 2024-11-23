import express from 'express';
import { getProductByBrandID, getProductByCategoryID, getProductByID, getProductList } from '../controllers/product';

export const productRoutes = express.Router();

productRoutes.get('/products', getProductList);
productRoutes.get('/product/:id', getProductByID);
productRoutes.get('/product-list-by-brandId/:id', getProductByBrandID);
productRoutes.get('/product-list-by-categoryId/:id', getProductByCategoryID);