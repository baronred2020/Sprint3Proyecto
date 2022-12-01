import{ BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import styles from "./App.module.scss";
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles2 from "./App2.module.scss";
import UserList from './components/UserList'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'





const App = () =>{
  const getClassName = () => {
    const pathname = window.location.href;
    if(pathname.includes("add")){
      return styles2.containeradd;
    }
    if(pathname.includes("edit")){
      return styles2.containeredit;
    }
    return styles.container1;
  }

  return (
  <BrowserRouter>
   
    {/* <div className={styles.container1}>
      
    <Routes>
    <Route path="/" element = {<Register/>} />  
    </Routes>

    <Routes>
    <Route path="/login" element={<Login/>}/>
    </Routes>
 
    <Routes>
    <Route path="/UserList/><:id" element={<UserList />} />
    </Routes>
    </div> 
    

    < div className={styles2.containeradd}>
      
      <Routes>
      <Route path="/UserList/:id/add" element={<AddUser />} />
      </Routes>
      </div> 


      <div className={styles2.containeredit}>
      <Routes>
      <Route path="/UserList/:id/edit/:id" element={<EditUser />} />
      </Routes>
      </div> */}
      <div className={getClassName()}>
      
      <Routes>
      <Route path="/" element = {<Register/>} />  
      </Routes>
  
      <Routes>
      <Route path="/login" element={<Login/>}/>
      </Routes>
   
      <Routes>
      <Route path="/UserList/:id" element={<UserList />} />
      </Routes>
      
        <Routes>
        <Route path="/UserList/:id/add" element={<AddUser />} />
        </Routes>
        
        <Routes>
        <Route path="/UserList/:id/edit/:id" element={<EditUser />} />
        </Routes>
        </div>
    </BrowserRouter>
  );
};
export default App

