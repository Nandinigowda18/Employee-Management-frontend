import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";

function Home(){

 const navigate = useNavigate();

 return(

  <div className="home-container">

    <div className="card">

      <h1>Employee Management System</h1>

      <p>Manage employees securely using JWT authentication</p>

      <div className="buttons">

        <button 
        className="login-btn"
        onClick={()=>navigate("/login")}>
          Login
        </button>

        <button 
        className="register-btn"
        onClick={()=>navigate("/register")}>
          Register
        </button>

      </div>

    </div>

  </div>

 )

}

export default Home;