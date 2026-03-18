git add .import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Services/Api";
import "../Styles/Register.css";

function Register(){

 const navigate = useNavigate();

 const [user,setUser] = useState({
   username:"",
   password:""
 });

 const handleChange = (e)=>{
   setUser({...user,[e.target.name]:e.target.value})
 }

 const register = async ()=>{

   try{

    await API.post("/auth/register",user);

    alert("User Registered Successfully. Please Login.");

    navigate("/login");

   }catch(err){
    alert("Registration Failed");
   }

 }

 return(

   <div className="register-container">

      <div className="register-card">

        <h2>Create Account</h2>

        <input 
        name="username" 
        placeholder="Enter username"
        onChange={handleChange}
        />

        <input 
        name="password"
        type="password"
        placeholder="Enter password"
        onChange={handleChange}
        />

        <button onClick={register}>
          Register
        </button>

        <p className="login-link">
          Already have an account?
          <span onClick={()=>navigate("/login")}> Login</span>
        </p>

      </div>

   </div>

 )

}

export default Register;