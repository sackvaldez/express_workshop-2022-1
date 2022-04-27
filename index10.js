// console.log('Hola mundillo')


const express= require('express'); //require es una palabra reservada que importa archivos, dada una ruta específica
const app= express ();
const {pokemon} = require('./pokedex1.json'); // poner llaves permite extraer tal cual el elemento pedido

/*
VERBOS HTTP
-Get
-Post
-Patch
-Put
-Delete
*/

app.get("/",(req, res, next)=>{
    
    res.send("Bienvenido al pokedex");
});

app.get("/pokemon",(req,res,next)=>{
    console.log(req.params.name); //una forma de jalar datos a traves de la variable "name" que se manda por la URL
    res.status(200);
    res.send("Hola, "+req.params.name); //arrojará el valor de la variable guardado
});

app.listen(process.env.PORT || 3000, ()=> { //el "()=>" es lo mismo a usar "function()"
    console.log('The server is running')
});