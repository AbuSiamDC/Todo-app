import {db} from "../db.js";
import jwt from "jsonwebtoken"

// getTodos,addTodo,updateTodo,deleteTodo
// -------------------------------------------------------------Get--------------------------------------------------------------------------

// export const getTodos = (req,res) => {

//     const token = req.cookies.accessToken;
//     console.log("token", token);
//     if (!token) return res.status(401).json("Not logged in!");

//     jwt.verify(token, "ilovereyna", (err, userInfo) => {
//         if (err) return res.status(403).json("Your Token seems to be Invalid!");
        
//         const q = "SELECT tasks.* FROM tasks JOIN users  ON (users.id = tasks.user_id) WHERE users.id = ? ORDER BY tasks.created_at DESC"
        
//         db.query(q, userInfo.id, (err, data) => {
//         if (err) return res.status(500).json(err);
//         return res.status(200).json(data);
//       });
//     })

//     console.log("user id of token: ",userInfo.id);

//     res.json("from get todos controller")
// }


// export const getTodos = (req,res) => {

//     const token = req.cookies.accessToken;
//     console.log("token", token);
//     if (!token) return res.status(401).json("Not logged in!");

//     jwt.verify(token, "ilovereyna", (err, userInfo) => {
//         if (err) return res.status(403).json("Your Token seems to be Invalid!");
//         console.log("user id of token: ",userInfo.id);
//         // const q = "SELECT tasks.* FROM tasks JOIN users  ON (users.id = tasks.user_id) WHERE users.id = ? ORDER BY tasks.created_at DESC"
//         const q = "SELECT tasks.* FROM tasks JOIN users  ON (users.id = tasks.user_id) WHERE users.id = ?"
        
//         db.query(q, userInfo.id, (err, data) => {
//         if (err) return res.status(500).json(err);
//         return res.status(200).json(data);
//       });
//     })

//     // console.log("user id of token: ",userInfo.id);

//     res.json("from get todos controller")
// }

// export const getTodos = (req,res) => {

//     const token = req.cookies.accessToken;
//     console.log("token", token);
//     if (!token) return res.status(401).json("Not logged in!");

//     jwt.verify(token, "ilovereyna", (err, userInfo) => {
//         if (err) return res.status(403).json("Your Token seems to be Invalid!");
//         console.log("user id of token: ",userInfo.id);
//         // const q = "SELECT tasks.* FROM tasks JOIN users  ON (users.id = tasks.user_id) WHERE users.id = ? ORDER BY tasks.created_at DESC"
//         const q = "SELECT * FROM tasks"
        
//         db.query(q, (err, data) => {
//         if (err) return res.status(500).json(err);
//         return res.status(200).json(data);    
//       });
//     })

//     console.log("user id of token: ",userInfo.id);

//     res.json("from get todos controller")
// }

export const getTodos = (req,res) => {

    const token = req.cookies.accessToken;
    console.log("token", token); 
    if (!token) console.log("Not logged in!");

    jwt.verify(token, "ilovereyna", (err, userInfo) => {
        if (err) console.log("Your Token seems to be Invalid!");
        console.log("inside verify user id of token: ",userInfo.id);
        
        // console.log("outside verify user id of token: ",userInfo.id);
        const q = "SELECT tasks.* FROM tasks JOIN users  ON (users.id = tasks.user_id) WHERE users.id = ? ORDER BY tasks.created_at DESC"
        // const q = "SELECT * FROM tasks" 
        
        db.query(q, userInfo.id, (err, data) => {
            if (err) console.log(err)
            return res.status(200).json(data);    
        });
    })      
 
    //? ================================= works======================================
    // const q = "SELECT * FROM tasks" 
    
    // db.query(q, (err,data)=>{
    //     if(err) return res.json(err)
    //     return res.json(data)  
    // })
    // ==============================================================================


 
    // console.log("user id of token: ",userInfo.id); 

    // res.json("from get todos controller") // haireee... commenting this out solved the problem.... if we have this here then the response insdie the query does not send ...it errors out
}

// -------------------------------------------------------------Add--------------------------------------------------------------------------


export const addTodo = (req,res) => {
    res.json("from add todos controller")
}

// -------------------------------------------------------------Update--------------------------------------------------------------------------


export const updateTodo = (req,res) => {
    res.json("from update todos controller")
}

// -------------------------------------------------------------Delete--------------------------------------------------------------------------


export const deleteTodo = (req,res) => {
    res.json("from delete todos controller")
}