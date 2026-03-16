import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./Components/Login";
import EmployeeList from "./Components/EmployeeList";
import AddEmployee from "./Components/AddEmployee";
import Register from "./Components/Register";
import Home from "./Pages/Home";

import EmployeeDashboard from "./Pages/EmployeeDashboard";
import UpdateEmployee from "./Components/UpdateEmployee";

function App(){

 return(

  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
    
      <Route path="/employee/add" element={<AddEmployee/>}/>
      <Route path="/employeeDashboard" element={<EmployeeDashboard/>}/>
       <Route path="/employee/list" element={<EmployeeList/>}/>
        <Route path="/employee/update/:id" element={<UpdateEmployee/>}/>


    </Routes>

  </BrowserRouter>

 )

}

export default App;