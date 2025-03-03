import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    empName: "",
    empAddress: "",
    empMNumber: ""  
  })

  const { empName, empAddress, empMNumber } = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/employee/saveEmployee", user);
    navigate("/");
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='empName' className='form-label'>
                Name
              </label>
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
              <label htmlFor='empAddress' className='form-label'>
                Address
              </label>
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
              <label htmlFor='empMNumber' className='form-label'>
                Contact
              </label>
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
            
            <Link className='btn btn-outline-danger mx-2'  to="/">Cancel</Link>

          </form>
        </div>
      </div>
    </div>
  )
}
