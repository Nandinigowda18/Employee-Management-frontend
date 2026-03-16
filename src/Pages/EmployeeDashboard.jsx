import { useNavigate } from "react-router-dom";
import "../Styles/EmployeeDashboard.css";

function EmployeeDashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard-container">

      <h2>Employee Management</h2>

      <div className="button-group">

        <button onClick={() => navigate("/employee/add")}>
          Add Employee
        </button>

        
        <button onClick={() => navigate("/employee/list")}>
          Employee List
        </button>

        <button onClick={() => navigate("/employee/search")}>
          Search Employee
        </button>

      </div>

    </div>
  );
}

export default EmployeeDashboard;