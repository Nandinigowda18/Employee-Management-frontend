import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../Services/Api";
import "../Styles/UpdateEmployee.css";

function UpdateEmployee() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    dept: "",
    phone: "",
    designation: "",
    salary: ""
  });

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await API.get(`/employee/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setEmployee(res.data);

    } catch (err) {
      console.error(err);
      alert("Failed to fetch employee");
    }

  };

  const handleChange = (e) => {

    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await API.put(`/employee/update/${id}`, employee, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert("Employee Updated Successfully");

      navigate("/employee/list");

    } catch (err) {
      console.error(err);
      alert("Update failed");
    }

  };

  return (

    <div className="update-container">

      <h2>Update Employee</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="dept"
          placeholder="Department"
          value={employee.dept}
          onChange={handleChange}
        />

        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={employee.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={employee.designation}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
        />

        <button type="submit">Update Employee</button>

        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/employeeDashboard")}
        >
          Back
        </button>

      </form>

    </div>

  );
}

export default UpdateEmployee;