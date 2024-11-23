import express from 'express';
import { productRoutes } from './productRoutes';

export const routes = express.Router();

routes.use(productRoutes);