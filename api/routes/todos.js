import express  from "express";
import { getTodos,addTodo,updateTodo,deleteTodo } from "../controllers/todos.js";

const router = express.Router()

router.get("/", getTodos)
router.post("/add", addTodo)
router.put("/update", updateTodo)
router.delete("/delete", deleteTodo)

export default router