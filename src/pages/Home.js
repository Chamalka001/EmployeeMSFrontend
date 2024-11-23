import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users,setUsers] = useState([])
    const { empID } = useParams();

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result = await axios.get('http://localhost:8080/api/v1/employee/getAllEmployees')
        setUsers(result.data.content);
    } 

    const deleteUser=async(empID)=>{
      await axios.delete(`http://localhost:8080/api/v1/employee/deleteEmployee/${empID}`);
      loadUsers();
    }

  return (
    <div className='container'>
      <div className='py-4'>
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Number</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((employee,index)=>(
            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{employee.empName}</td>
            <td>{employee.empAddress}</td>
            <td>{employee.empMNumber}</td>
            <td>
              <Link className='btn btn-primary mx-2'
                to={`/viewuser/${employee.empID}`}
              >View</Link>
              <Link className='btn btn-outline-primary mx-2'
                to={`/edituser/${employee.empID}`}
              >Edit</Link>
              <button className='btn btn-danger mx-2'
              onClick={()=>deleteUser(employee.empID)}
              >Delete</button>                            
            </td>
          </tr>            
        ))
    }

  </tbody>
</table>
      </div>
    </div>
  )
}
