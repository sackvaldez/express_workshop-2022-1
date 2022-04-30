// console.log('Hola mundillo')


const express= require('express'); //require es una palabra reservada que importa archivos, dada una ruta específica
const req = require('express/lib/request');
const app= express ();
const {pokemon} = require('./pokedex1.json');

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
    res.send("Bienvenido al pokedex");
});

app.get("/pokemon/all",(req,res,next)=>{
    res.status(200);
    res.send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})',(req,res,next)=> {
    const id=req.params.id-1;
    if(id>=0 && id<=151){
        res.status(200);
        res.send(pokemon[req.params.id-1]);
    } // se coloca un else en caso de falla
    else {
        res.status(404);
        res.send("Pokemon no encontrado");
    }
});

app.get('/pokemon/:name',(req,res, next) => {
    const name= req.params.name;
    for(i=0; i < pokemon.length; i++){
        if(pokemon[i].name == name){
            res.status(200);
            res.send(pokemon[i]);
        }
    }// no se coloca un else
    res.status(404);
    res.send("No se encontró el pokemon");
});

app.listen(process.env.PORT || 3000, ()=> { //el "()=>" es lo mismo a usar "function()"
    console.log('The server is running')
});