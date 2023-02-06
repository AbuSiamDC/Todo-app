import express  from "express";
import authRouter from "./routes/auth.js"
import usersRouter from "./routes/users.js"
import todosRouter from "./routes/todos.js"
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express()
const port = 6900

// middlewares
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);


app.use("/api/auth", authRouter)
app.use("/api/users", usersRouter)
app.use("/api/todos", todosRouter)

app.listen(port, ()=>{
    console.log("Backend Running on port: ",port);
})