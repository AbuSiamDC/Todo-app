import {db} from "../db.js";
// import bcrypt form "bcryptjs";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


export const register = (req,res)=>{
    const q = "SELECT * FROM users WHERE email = ?"

    db.query(q,[req.body.email], (err,data)=>{
        if(err) return res.json(err)
        if (data.length) return res.status(409).json("This User already has an account")

        const salt = bcrypt.genSaltSync(7);
        const hashpass = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users(`full_name`,`email`,`password`) VALUES (?)"
        const values = [
            req.body.full_name,
            req.body.email,
            hashpass,
        ]
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err)
            return res.status(200).json("You joined the partyyyy")
        })
    })

}

export const login = (req,res)=>{

    const q = "SELECT * FROM users WHERE email = ?"
    db.query(q,[req.body.email], (err,data)=>{
        if(err) return res.json(err)
        if (data.length === 0) return res.status(404).json("You have not joined my Partyyyy :( ")
        
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)
        if(!isPasswordCorrect) return res.status(400).json("Wrong Password")

        const token = jwt.sign({id:data[0].id}, "ilovereyna")
        const {password, ...other} = data[0]

        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(other)
        
    })
}


export const logout = (req,res)=>{

    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("You left the partyyy...See you soon.")

}