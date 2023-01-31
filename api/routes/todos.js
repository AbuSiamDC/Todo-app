import express  from "express";
import { addTodos } from "../controllers/todos.js";

const router = express.Router()

router.get("/", addTodos)

export default router