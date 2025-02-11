import { Request, Response } from "express";
import { Connect, Query } from "../../config/mysql";

export const getProductList = (req: Request, res: Response): void => {
  const offset = req.query?.offset ?? 0;
  const limit = req.query?.limit ?? 10;

  const query = `SELECT * FROM Product LIMIT ${limit} OFFSET ${offset}`;
  Connect().then((connection) => {
    Query(connection, query)
      .then((results) => {
        return res.status(200).json({
            results,
          });
      })
      .catch((error) => {
        return res.status(400).json({
          message: error.message,
          error,
        });
      });
  });
};

export const getProductByID = (req: Request, res: Response): void => {
  const productID = req.params?.id ?? 1;
  const query = `SELECT * FROM ProductDetails INNER JOIN Product ON ProductDetails.productID = Product.productID WHERE ProductDetails.productID = ${productID}`;

  Connect().then((connection) => {
    Query(connection, query)
      .then((results) => {
        return res.status(200).json({
          results,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          message: error.message,
          error,
        });
      });
  });
};

export const getProductByCategoryID = (req: Request, res: Response): void => {
  const categoryID = req.params?.id ?? 1;
  const offset = req.query?.offset ?? 0;
  const limit = req.query?.limit ?? 10;
  const query = `SELECT * FROM Product WHERE categoryID = ${categoryID} LIMIT ${limit} OFFSET ${offset}`;
  Connect().then((connection) => {
    Query(connection, query)
      .then((results) => {
        return res.status(200).json({
          results,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          message: error.message,
          error,
        });
      });
  });
};

export const getProductByBrandID = (req: Request, res: Response): void => {
  const brandID = req.params?.id ?? 1;
  const offset = req.query?.offset ?? 0;
  const limit = req.query?.limit ?? 10;
  const query = `SELECT * FROM Product INNER JOIN Brand ON Product.brandID = Brand.brandID WHERE Brand.brandID = ${brandID} LIMIT ${limit} OFFSET ${offset}`;
  Connect().then((connection) => {
    Query(connection, query)
      .then((results) => {
        return res.status(200).json({
          results,
        });
      })
      .catch((error) => {
        return res.status(400).json({
          message: error.message,
          error,
        });
      });
  });
};
