// console.log('Hola mundillo')


const express= require('express'); //require es una palabra reservada que importa archivos, dada una ruta específica
const app= express ();

/*
VERBOS HTTP
-Get
-Post
-Patch
-Put
-Delete
*/

app.get("/",(req, res, next)=>{
    res.status(200);
    res.send("Bienvenido");
});

app.listen(3000,()=>{ //el "()=>" es lo mismo a usar "function()"
    console.log('The server is running')
});