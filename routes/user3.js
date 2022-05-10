const express = require("express");
const jwt= require('jsonwebtoken');
const user= express.Router();
const db= require('../config/database');

user.post("/", async (req,res,next)=>{
    const {user_name, user_email, user_password}= req.body;
    
    if(user_name && user_email && user_password){

        let query= "INSERT INTO user1 (user_name, user_mail, user_password)";
        query += `VALUES ('${user_name}','${user_email}','${user_password}');`;
    
        const rows= await db.query(query);
    
        if(rows.affectedRows == 1) {
            return res.status(201).json({ode: 201, message: "Usuario registrado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrió un error"})

    }
    return res.status(500).json({code: 500, message: "OJO: Campos incompletos "})

});

user.post("/login", async (req, res, next) => {

    const {user_mail, user_password}= req.body;
    const query= `SELECT * FROM user1 WHERE user_mail= '${user_mail}' AND user_password= '${user_password}'; `;
    const rows= await db.query(query);

    if(user_mail && user_password){
        if(rows.length == 1){
            const token= jwt.sign({ //recibe un json con los datos con los que generara el token
                user_id: rows[0].user_id,
                user_mail: rows[0].user_mail
        },"debugkey"); //recibe una llave secreta que solo conocera el servidor
        return res.status(200).json({code: 200, message: token});
    } 
    else {
        return res.status(401).json({code: 401, message: "Usuario o contraseña incorrectos"});
        }

    }
    return res.status(500).json({code: 500, message: "OJITO: Campos incompletos "})

});

user.get("/", async (req,res, next)=>{
    const query= "SELECT * FROM user1";
    const rows= await db.query(query);

    return res.status(200).json({code: 200, message: rows});
});



module.exports = user; 