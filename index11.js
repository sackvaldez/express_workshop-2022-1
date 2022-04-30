// console.log('Hola mundillo')


const express= require('express'); //require es una palabra reservada que importa archivos, dada una ruta específica
const req = require('express/lib/request');
const app= express ();
const {pokemon} = require('./pokedex1.json');

/*
VERBOS HTTP
-Get: obtener recursos
-Post: almacenar/crear recursos
-Patch: modificar una parte de un recurso
-Put : modificar un recurso completo
-Delete: borrar un recurso
*/

app.get("/",(req, res, next)=>{
   return res.status(200).send("Bienvenido al pokedex"); 
});

app.get("/pokemon/all",(req,res,next)=>{
    return res.status(200).send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})',(req,res,next)=> {
    const id=req.params.id-1;
    if(id>=0 && id<=151){
        res.status(200).send(pokemon[req.params.id-1]);
    } // se coloca un else en caso de falla
    else {
        return res.status(404).send("Pokemon no encontrado");
    }
});

app.get('/pokemon/:name([A-Za-z]+)',(req,res, next) => {
    const name= req.params.name;
    for(i=0; i < pokemon.length; i++){
        if(pokemon[i].name.toUpperCase() == name.toUpperCase()){
            return res.status(200).send(pokemon[i]);
        }
    }// no se coloca un else
    return res.status(404).send("No se encontró el pokemon");
});

app.listen(process.env.PORT || 3000, ()=> { //el "()=>" es lo mismo a usar "function()"
    console.log('The server is running')
});