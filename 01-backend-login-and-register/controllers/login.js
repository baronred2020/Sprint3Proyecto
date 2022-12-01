const bcrypt = require("bcrypt");
const usuario = require("../model/usuario");
const Usuario = require("../model/usuario");

const login  = async (req,res) => {
    const {correo,contrasena} = req.body;

    Usuario.findOne({correo}).then((usuario) =>{
        if(!usuario){
            return res.json({mensaje: "Usuario no encontrado"})
        }
        bcrypt.compare(contrasena,usuario.contrasena).then((esCorrecta) =>{
            if(esCorrecta){
                const{id,nombre} = usuario;
                return res.json({mensaje: "Ha ingresado correctamente",usuario:{id,nombre}});
            }else{
                return res.json({mensaje:"contrasena incorrecta"})
            }
        });
    });
};

module.exports = login;
