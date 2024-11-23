"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("../config/config"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json({ limit: '50mb', type: 'application/json' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
// routes
app.use('/', routes_1.routes);
app.get('/', (req, res) => {
    res.send('hello world');
});
app.listen(config_1.default.server, () => {
    console.log(`Server is Running on Port ${config_1.default.server}`);
});
