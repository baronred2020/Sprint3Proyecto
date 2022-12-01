const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
    nombre: {type: String, required :true },
    usuarioo: {type: String, required :true},
    correo: {type: String, required :true , unique: true},
    contrasena: {type: String, required :true},
    });
module.exports = model("Usuario",UsuarioSchema);
