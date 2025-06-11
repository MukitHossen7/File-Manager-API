import { Request, Response } from "express";
import { client } from "../db/mongodb";
import { ObjectId } from "mongodb";

//collection
const todosCollection = client.db("CRUD_DB").collection("todos");

export const getAllTodos = async (req: Request, res: Response) => {
  const result = await todosCollection.find().toArray();
  res.send(result);
};

export const postTodos = async (req: Request, res: Response) => {
  const body = req.body;
  const result = await todosCollection.insertOne(body);
  res.send(result);
};

export const deleteTodosById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await todosCollection.deleteOne({ _id: new ObjectId(id) });
  res.send(result);
};

export const updateTodosById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const filter = { _id: new ObjectId(id) };
  const updateFields: any = {};
  if (title !== undefined) updateFields.title = title;
  if (description !== undefined) updateFields.description = description;
  if (completed !== undefined) updateFields.completed = completed;
  const updateDoc = {
    $set: updateFields,
  };
  const result = await todosCollection.updateOne(filter, updateDoc);
  res.send(result);
};
