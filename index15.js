// console.log('Hola mundillo')

const morgan= require('morgan');
const express= require('express'); //require es una palabra reservada que importa archivos, dada una ruta específica
const req = require('express/lib/request');
const app= express ();
const pokemon= require('./routes/pokemon');
const user= require('./routes/user'); 

/*EL USE SE UTILIZA CUANDO QUEREMOS QUE UNA FUNCION SE LE APLIQUE A TODAS LAS PETICIONES QUE 
ENTREN A UN SERVIDOR (MIDDLEWARES)*/
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));




/*
VERBOS HTTP
-Get: obtener recursos
-Post: almacenar/crear recursos
-Patch: modificar una parte de un recurso
-Put : modificar un recurso completo
-Delete: borrar un recurso
*/

app.get("/",(req, res, next)=>{
   return res.status(200).json({code:1, message: "Bienvenido al pokedex"}); 
});

app.use("/pokemon", pokemon);
app.use("/user", user);

app.use((req, res, next)=>{
    return res.status(404).json({code: 404, message: "URL no encontrada"});
});

app.listen(process.env.PORT || 3000, ()=> { //el "()=>" es lo mismo a usar "function()"
    console.log('The server is running')
});