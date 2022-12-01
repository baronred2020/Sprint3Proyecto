const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const controllers = require("./controllers")

const app = express();
//vamos a crear un middleware que nos va permitir Enviar datos del frontend al backend estando desde un mismo puerto o servidor.
app.use(cors());
//Abrimos este middleware que nos permite acceder a la informacion que contiene el body en las peticiones POST o PUT
app.use(express.json());

//Rutas de nuestra api
app.get('/user/:userId', controllers.getUserById)
app.post('/register', controllers.register)
app.post('/login', controllers.login)

const PORT = 4000;

app.listen(PORT,()=> {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  db();
});
module.exports = app;
