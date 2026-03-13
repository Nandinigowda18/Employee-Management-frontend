import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../Services/Api";
import "../Styles/login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await API.post("/auth/login", { username, password });
      localStorage.setItem("token", res.data);
      alert("Login successful");
      navigate("/employeeDashboard"); // redirect to employee page
    } catch (err) {
      console.error(err);
      alert("Login failed. Check username/password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>

        <p className="register-link">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;