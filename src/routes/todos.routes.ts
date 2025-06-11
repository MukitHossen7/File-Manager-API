import express from "express";
import {
  deleteTodosById,
  getAllTodos,
  postTodos,
} from "../controller/todos.controller";

//Single routing
export const todosRouter = express.Router();

todosRouter.post("/", postTodos);
todosRouter.get("/", getAllTodos);
todosRouter.delete("/:id", deleteTodosById);
