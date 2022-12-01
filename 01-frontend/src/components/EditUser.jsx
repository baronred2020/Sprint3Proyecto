import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles2 from "./styles2.module.scss"

const EditUser = () => {
  const [fecha, setfecha] = useState("");
  const [hora, sethora] = useState("");
  const [estado, setestado] = useState("");
  const [largo, setlargo] = useState("");
  const [largoDos, setlargoDos ]= useState("")
  const [alto, setalto] = useState("");
  const [peso, setpeso] = useState("");
  const [direccionRecogida, setdireccionRecogida ]= useState("")
  const [ciudadRecogida, setciudadRecogida] = useState("");
  const [nombreDestinatario, setnombreDestinatario ]= useState("")
  const [cedulaNitDestinatario, setcedulaNitDestinatario] = useState("");
  const [direccionEntrega, setdireccionEntrega] = useState("")
  const [ciudadEntrega, setciudadEntrega] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setfecha(response.data.fecha);
    sethora(response.data.hora);
    setestado(response.data.estado);
    setlargo(response.data.largo);
    setlargoDos(response.data.largoDos);
    setalto(response.data.alto);
    setpeso(response.data.peso);
    setdireccionRecogida(response.data.direccionRecogida);
    setciudadRecogida(response.data.ciudadRecogida);
    setnombreDestinatario(response.data.nombreDestinatario);
    setcedulaNitDestinatario(response.data.cedulaNitDestinatario);
    setdireccionEntrega(response.data.direccionEntrega);
    setciudadEntrega(response.data.ciudadEntrega);

  
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        fecha,
        hora,
        estado,
        largo,
        largoDos,
        alto,
        peso,
        direccionRecogida,
        ciudadRecogida,
        nombreDestinatario,
        cedulaNitDestinatario,
        direccionEntrega,
        ciudadEntrega,
      });
      navigate(`/UserList/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div className="columns mt-6">
    <div className={styles2.formContainer}>
    <div><h4>ACTUALIZACIÓN DE ÓRDENES</h4></div>
    <div className="columns mt-6">
      <div className="column is-half" style={{width:"100%"}}>
        <form onSubmit={updateUser}>
        <div className="d-flex" style={{gap: 15}}>
          <div className="field"style={{width:"100%"}} >
            <label className="label">Fecha</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={fecha}
                onChange={(e) => setfecha(e.target.value)}
                placeholder=""
              />
            </div>
          </div>

          <div className="field" style={{width:"100%"}}>
            <label className="label">Hora</label>
            <div className="control">
              <input
                type="time"
                className="input"
                value={hora}
                onChange={(e) => sethora(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          </div>
          <div className="field">
            <label className="label">Estado</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={estado}
                  onChange={(e) => setestado(e.target.value)}
                >
                  <option  value="Seleccionar..." placeholder="Seleccionar.." >Seleccionar un estado . . .</option>
                  <option value="Cancelado❌">Cancelado</option>
                  <option value="Cumplido✅">Cumplido</option>
                  <option  value="Guardado💾" >Guardado</option>
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex" style={{gap: 130}}>
          <div className="field" style={{width:"13%"}} >
            <label className="label">Largo (cm)</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={largo}
                onChange={(e) => setlargo(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          <div className="field" style={{width:"14%"}} >
            <label className="label">Ancho (cm)</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={largoDos}
                onChange={(e) => setlargoDos(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          

          <div className="field" style={{width:"12%"}} >
            <label className="label">Alto (cm)</label>
            <div className="control">
                <input
                  type="number"
                  className="input"
                  value={alto}
                  onChange={(e) => setalto(e.target.value)}
                  placeholder=""
                />
              </div>
            </div>
          <div className="field" style={{width:"12%"}}>
            <label className="label">Peso (kg)</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={peso}
                onChange={(e) => setpeso(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          </div>
          
          <div className="d-flex" style={{gap: 15}}>
          <div className="field" style={{width:"100%"}} >
            <label className="label">Direccion Recogida</label>
            <div className="">
              <input
                type="text"
                className="input"
                value={direccionRecogida}
                onChange={(e) => setdireccionRecogida(e.target.value)}
                placeholder=""
              />
            </div>
          </div> 
          <div className="field" style={{width:"100%"}} >
            <label className="label">Ciudad Recogida</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={ciudadRecogida}
                onChange={(e) => setciudadRecogida(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          </div> 
          <div className="d-flex" style={{gap: 15}}>
          <div className="field" style={{width:"100%"}} >
            <label className="label">Nombre Destinatario</label>
            <div className="">
              <input
                type="text"
                className="input"
                value={nombreDestinatario}
                onChange={(e) => setnombreDestinatario(e.target.value)}
                placeholder=""
              />
            </div>
          </div> 
          <div className="field" style={{width:"100%"}}>
            <label className="label">Cédula/Nit Destinatario</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={cedulaNitDestinatario}
                onChange={(e) => setcedulaNitDestinatario(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          </div>
          <div className="d-flex" style={{gap: 15}}>
          <div className="field" style={{width:"100%"}} >
            <label className="label">Dirección Entrega</label>
            <div className="">
              <input
                type="text"
                className="input"
                value={direccionEntrega}
                onChange={(e) => setdireccionEntrega(e.target.value)}
                placeholder=""
              />
            </div>
          </div> 
          <div className="field">
            <label className="label">Ciudad Entrega</label>
            <div className="">
              <input
                type="text"
                className="input"
                value={ciudadEntrega}
                onChange={(e) => setciudadEntrega(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Actualizar Orden
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
    </div>
    </div>
  );
};

export default EditUser;
