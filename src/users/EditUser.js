import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

  let navigate = useNavigate();
  const { empID } = useParams();

  const [employee, setEmployee] = useState({
    empName: "",
    empAddress: "",
    empMNumber: ""  
  })

  const { empName, empAddress, empMNumber } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    loadEmployee();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/v1/employee/updateEmployee`, employee);
    navigate("/");
  };

  const loadEmployee = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/api/v1/employee/searchEmployee/${empID}`);
      setEmployee(result.data.content);
    } catch (error) {
      console.error("Error loading employee data:", error);
    }
  };

  if (!employee.empName && !employee.empAddress && !employee.empMNumber) {
    return <div>Loading...</div>;
  }

  

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit Employee</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='empName' className='form-label'>Name</label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter your name'
                name="empName"
                value={empName}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='empAddress' className='form-label'>Address</label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter your address'
                name="empAddress"
                value={empAddress}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='empMNumber' className='form-label'>Contact</label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter your number'
                name="empMNumber"
                value={empMNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type='submit' className='btn btn-outline-primary'>Submit</button>
            <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
