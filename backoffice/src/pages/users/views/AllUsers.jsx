

import { fetchusers } from '../../../store/UserInfo';
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';



      export default function AllUsers() {   
        const users = useSelector((state) => state.userSlice.users.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchusers());
  }, [dispatch]);
  const navigate = useNavigate();
  const [query, setQuery]= useState("");
 
  return (

    
    <div>
        
    <div>
      <h3
        className="p-1"
        style={{
          fontFamily: "Segoe UI",
          color: "#11354D",
          textDecoration: "underline",
        }}
      >
        All users
      </h3>
      <div className="px-5">
        <button className="btn btn-success my-3" onClick={() => navigate("adduser")}>
          Add user +
        </button>
      </div>
    </div>
    <input className='search' placeholder='Search...'  onChange={(e) => setQuery(e.target.value)}/>
    <div className="p-4 d-flex justify-content-center" style={{ height: "100%", width: "100%" }}>
   
  <table className='table' >
<thead>
  <tr>
<th>Id</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Role</th>
<th>Action</th>

</tr>
</thead>
<tbody>
{users.map((user, index)=>(
  <tr key={index}>
<td>{user.id}</td>
<td>{user.lastName} {user.firstName}</td>
<td>{user.email}</td>
<td>{user.phone}</td>
<td>{user.role}</td>
<td>

</td>
<button className="btn btn-sm btn-primary" onClick={() => navigate("edituser")}>Edit</button>
<button className="btn btn-sm btn-danger ms-2" >Delete</button>
  </tr>
)
)}


</tbody>



  </table >
    </div>
  </div>
);
}



