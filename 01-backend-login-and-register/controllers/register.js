const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");

const register = async (req, res) => {
    const  { nombre, correo, usuarioo, contrasena } = req.body;

    Usuario.findOne({correo}).then((usuario) =>{
        if(usuario){
            return res.json({mensaje: "Ya existe un usuario con ese correo"});
        }else if(!nombre || !usuarioo || !correo || !contrasena){
            return res.json({mensaje: "Falta el nombre/usuario/correo/contrasena"});
        }else{
            bcrypt.hash(contrasena,10,(error, contrasenaHasheada)=>{
                if(error) res.json ({error});
                else{
                   const nuevoUsuario = new Usuario({
                    nombre,
                    usuarioo,
                    correo,
                    contrasena:contrasenaHasheada,
                   });
                   nuevoUsuario.save()
                   .then((usuario) =>{
                    res.json({mensaje:"Usuario creado correctamente",usuario})
                   })
                    .catch((error) => console.error(error))
                }
            });
        }
    });
};
module.exports = register
