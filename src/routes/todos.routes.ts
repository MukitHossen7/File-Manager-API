import express from "express";
import {
  deleteTodosById,
  getAllTodos,
  getTodosById,
  postTodos,
  updateTodosById,
} from "../controller/todos.controller";

//Single routing
export const todosRouter = express.Router();

todosRouter.post("/", postTodos);
todosRouter.get("/", getAllTodos);
todosRouter.get("/:id", getTodosById);
todosRouter.delete("/:id", deleteTodosById);
todosRouter.patch("/:id", updateTodosById);
