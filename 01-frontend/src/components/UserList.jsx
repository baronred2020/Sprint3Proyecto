import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles2 from "./styles2.module.scss"
import "../assets/Loading2.css"
import Loading2 from './Loading2';
const UserList = () => {
  const [users, setUser] = useState([]);
  const [loading2, setLoading2] = useState(false);

  function cambiarEstado(){
    setLoading2(true);
    setTimeout(()=>{ 
      setLoading2(false);
    },800)
  }

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <>

      <div className={styles2.formContainer}>
        <div><h6>Bienvenido a InstaYA</h6>
        <h4>LISTADO DE ÓRDENES</h4></div>
        <br></br>
        <Link to="add" type="to" onClick={()=> cambiarEstado() && loading2 ?
           <Loading2/> :
           null}>{'🡆'} Crear Orden
        </Link>
        {/* <Link to="add"  >
        {'🡆'} Crear Orden
        </Link> */}
        
        <table className="table table-hover mt-2">
          <thead>
            <tr>
              <th class="table-warning">#Servicio</th>
              {/* <th>Fecha</th>
              <th>Hora</th>
              <th>Estado</th>
              <th>largo</th>
              <th>Largo2</th>
              <th>Alto</th>
              <th>Peso</th>
              <th>Direccion Recogida</th>
              <th>ciudad Recogida</th>
              <th>Nombre Destinatario</th>
              <th>Cedula/Nit Destinatario</th>
              <th>Ciudad Entrega</th>
              <th>Direccion Entrega</th> */}
              
              <th class="table-warning">Fecha</th>
              <th class="table-warning">Ciudad Recogida</th>
              <th class="table-warning">Direccion Recogida</th>
              <th class="table-warning">Estado</th>
              <th class="table-warning">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td><Link to={`edit/${user._id}`}>{index + 1}</Link></td>
                {/* <td>{user.fecha}</td>
                <td>{user.hora}</td>
                <td>{user.estado}</td>
                <td>{user.largo}</td>
                <td>{user.largoDos}</td>
                <td>{user.alto}</td>
                <td>{user.peso}</td>
                <td>{user.direccionRecogida}</td>
                <td>{user.ciudadRecogida}</td>
                <td>{user.nombreDestinatario}</td>
                <td>{user.cedulaNitDestinatario}</td>
                <td>{user.direccionEntrega}</td>
                <td>{user.ciudadEntrega}</td> */}
                
                <td>{user.fecha}</td>
                <td>{user.ciudadEntrega}</td>
                <td>{user.direccionEntrega}</td>
                <td>{user.estado}</td>
                <td>
                  {/* <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link> */}
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    <div>
        {loading2 ? <Loading2></Loading2> : ""}
      </div>

      </>

      
  );
};

export default UserList;