"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByBrandID = exports.getProductByCategoryID = exports.getProductByID = exports.getProductList = void 0;
const mysql_1 = require("../../config/mysql");
const getProductList = (req, res) => {
    var _a, _b, _c, _d;
    const offset = (_b = (_a = req.query) === null || _a === void 0 ? void 0 : _a.offset) !== null && _b !== void 0 ? _b : 0;
    const limit = (_d = (_c = req.query) === null || _c === void 0 ? void 0 : _c.limit) !== null && _d !== void 0 ? _d : 10;
    const query = `SELECT * FROM product LIMIT ${limit} OFFSET ${offset}`;
    (0, mysql_1.Connect)().then((connection) => {
        (0, mysql_1.Query)(connection, query).then((results) => {
            return res.status(200).json({
                results
            });
        }).catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        });
    });
};
exports.getProductList = getProductList;
const getProductByID = (req, res) => {
    var _a, _b;
    const productID = (_b = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : 1;
    const query = `SELECT * FROM ProductDetails WHERE ProductID = ${productID}`;
    (0, mysql_1.Connect)().then((connection) => {
        (0, mysql_1.Query)(connection, query).then((results) => {
            return res.status(200).json({
                results
            });
        }).catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        });
    });
};
exports.getProductByID = getProductByID;
const getProductByCategoryID = (req, res) => {
    var _a, _b, _c, _d, _e, _f;
    const categoryID = (_b = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : 1;
    const offset = (_d = (_c = req.query) === null || _c === void 0 ? void 0 : _c.offset) !== null && _d !== void 0 ? _d : 0;
    const limit = (_f = (_e = req.query) === null || _e === void 0 ? void 0 : _e.limit) !== null && _f !== void 0 ? _f : 10;
    const query = `SELECT * FROM Product WHERE categoryID = ${categoryID} LIMIT ${limit} OFFSET ${offset}`;
    (0, mysql_1.Connect)().then((connection) => {
        (0, mysql_1.Query)(connection, query).then((results) => {
            return res.status(200).json({
                results
            });
        }).catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        });
    });
};
exports.getProductByCategoryID = getProductByCategoryID;
const getProductByBrandID = (req, res) => {
    var _a, _b, _c, _d, _e, _f;
    const brandID = (_b = (_a = req.params) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : 1;
    const offset = (_d = (_c = req.query) === null || _c === void 0 ? void 0 : _c.offset) !== null && _d !== void 0 ? _d : 0;
    const limit = (_f = (_e = req.query) === null || _e === void 0 ? void 0 : _e.limit) !== null && _f !== void 0 ? _f : 10;
    const query = `SELECT * FROM Product WHERE brandID = ${brandID} LIMIT ${limit} OFFSET ${offset}`;
    (0, mysql_1.Connect)().then((connection) => {
        (0, mysql_1.Query)(connection, query).then((results) => {
            return res.status(200).json({
                results
            });
        }).catch((error) => {
            return res.status(200).json({
                message: error.message,
                error
            });
        });
    });
};
exports.getProductByBrandID = getProductByBrandID;
