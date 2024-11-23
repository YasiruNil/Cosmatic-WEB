"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_1 = require("../controllers/product");
exports.productRoutes = express_1.default.Router();
exports.productRoutes.get('/products', product_1.getProductList);
exports.productRoutes.get('/product/:id', product_1.getProductByID);
exports.productRoutes.get('/product-list-by-brandId/:id', product_1.getProductByBrandID);
exports.productRoutes.get('/product-list-by-categoryId/:id', product_1.getProductByCategoryID);
