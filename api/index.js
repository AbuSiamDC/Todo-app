import express  from "express";

const app = express()
const port = 6900

// middlewares
app.use(express.json())

app.listen(port, ()=>{
    console.log("Backend Running on port: ",port);
})