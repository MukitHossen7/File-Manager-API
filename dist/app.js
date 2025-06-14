"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_routes_1 = require("./routes/todos.routes");
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
//routing
app.use("/todos", todos_routes_1.todosRouter);
app.get("/", (req, res) => {
    res.send("I do CRUD operation");
});
exports.default = app;
