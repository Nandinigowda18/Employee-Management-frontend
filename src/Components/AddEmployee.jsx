import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../Services/Api";
import "../Styles/AddEmployee.css";

function AddEmployee() {

  const navigate = useNavigate();
  console.log("AddEmployee component loaded");

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    dept: "",
    phone: "",
    designation: "",
    salary: ""
  }); 

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

      await API.post(
        "/employee/add",
        employee,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Employee added successfully");

      navigate("/employeeDashboard");

    } catch (error) {
      console.error(error);
      alert("Failed to add employee");
    }
  };

  return (
    <div className="add-container">

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit} className="add-form">

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="dept"
          placeholder="Department"
          value={employee.dept}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={employee.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={employee.designation}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Employee</button>

      </form>
    </div>
  );
}

export default AddEmployee;