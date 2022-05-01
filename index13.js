// console.log('Hola mundillo')

const bodyParser= require('body-parser');
const morgan= require('morgan');
const express= require('express'); //require es una palabra reservada que importa archivos, dada una ruta específica
const req = require('express/lib/request');
const app= express ();
const pokemon= require('./routes/pokemon');

/*EL USE SE UTILIZA CUANDO QUEREMOS QUE UNA FUNCION SE LE APLIQUE A TODAS LAS PETICIONES QUE 
ENTREN A UN SERVIDOR (MIDDLEWARES)*/
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



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

app.use("/pokemon", pokemon);

app.listen(process.env.PORT || 3000, ()=> { //el "()=>" es lo mismo a usar "function()"
    console.log('The server is running')
});