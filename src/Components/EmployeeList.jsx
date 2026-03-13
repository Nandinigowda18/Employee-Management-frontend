import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Services/Api";
import "../Styles/EmployeeList.css";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchEmployees = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await API.get("/employee/employees", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setEmployees(res.data);

    } catch (err) {
      console.error(err);
      alert("Failed to fetch employees");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDelete = async (id) => {

    try {

      const token = localStorage.getItem("token");

      await API.delete(`/employee/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert("Employee Deleted");

      fetchEmployees(); // refresh list

    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }

  };

  return (

    <div className="list-container">

      <h2>Employee List</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Dept</th>
            <th>Phone</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.dept}</td>
              <td>{emp.phone}</td>
              <td>{emp.designation}</td>
              <td>{emp.salary}</td>

              <td>

                <button
                  className="update-btn"
                  onClick={() => navigate(`/employee/update/${emp.id}`)}
                >
                  Update
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(emp.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default EmployeeList;