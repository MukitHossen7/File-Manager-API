"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const todos_controller_1 = require("../controller/todos.controller");
//Single routing
exports.todosRouter = express_1.default.Router();
exports.todosRouter.post("/", todos_controller_1.postTodos);
exports.todosRouter.get("/", todos_controller_1.getAllTodos);
exports.todosRouter.get("/:id", todos_controller_1.getTodosById);
exports.todosRouter.delete("/:id", todos_controller_1.deleteTodosById);
exports.todosRouter.patch("/:id", todos_controller_1.updateTodosById);
