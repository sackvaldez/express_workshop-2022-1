const jwt= require('jsonwebtoken');

module.exports= (req,res,next)=>{ //INTENTARA OBTENER EL TOKEN DE LOS ENCABEZADOS DE LA PETICION
    try {
        const token= req.headers.authorization.split(" ")[1];
        const decoded= jwt.verify(token, "debugkey"); //VERA SI ES UN TOKEN VALIDO
        req.user= decoded;
        next(); //REFERENCIA HACIA LA SIGUIENTE FUNCION, O RUTA
    }
    catch (error){
        return res.status(401).json({code: 401, message: "No tienes permiso: ("});
    }

}; 