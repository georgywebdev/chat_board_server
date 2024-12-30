"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dynamoose_1 = __importDefault(require("dynamoose"));
dotenv_1.default.config();
dynamoose_1.default.aws.ddb.local();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)("common"));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Hello World");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    `Server running on port ${port}`;
});
