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
 
app.get("/pokemon",(req,res,next)=>{
    return res.status(200).send(pokemon);
});

app.get('/pokemon/:id([0-9]{1,3})',(req,res,next)=> {
    const id=req.params.id-1;
    (id>=0 && id<=151) ?
        res.status(200).send(pokemon[req.params.id-1]):
        res.status(404).send("Pokemon no encontrado");
    }
);

app.get('/pokemon/:name([A-Za-z]+)',(req,res, next) => {

//OPERADOR TERNARIO= condicion ? valor si verdadero: valor si falso

    const name= req.params.name;
    const pk= pokemon.filter((p) => {
           return (p.name.toUpperCase() == name.toUpperCase()) ? p: null;
            
        });
        
    (pk.length>0) ? res.status(200).send(pk) : res.status(404).send("No se encontró el pokemon");
});

app.listen(process.env.PORT || 3000, ()=> { //el "()=>" es lo mismo a usar "function()"
    console.log('The server is running')
});