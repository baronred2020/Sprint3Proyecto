const usuario = require("../model/usuario");
const Usuario = require("../model/usuario")

const getUserById = async (req, res) => {
    const {userId}= req.params;

    if(userId.length === 24) {
        Usuario.findById(userId).then((usuario)=>{
          if(!usuario){
            return res.json({mensaje: "Usuario no encontrado"});
          } else{
            const {_id,contrasena,__v, ...resto} = usuario._doc;
            res.json(resto);
          }  
        });
    }else{
        res.json({mensaje: "Estas enviando identificacion incorrecta"});
    }
};

module.exports = getUserById;