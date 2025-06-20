"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongodb_1 = require("./db/mongodb");
const port = 5000;
const serverConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongodb_1.client.connect();
    yield mongodb_1.client.db("CRUD_DB").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    app_1.default.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});
serverConnection();
