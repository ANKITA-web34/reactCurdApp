// import axios from "axios";
// import React, {useEffect, useState} from "react";
// import { useNavigate, useParams } from 'react-router';
// import { Link } from "react-router-dom";


// const ViewUser = () => {
//     let history = useNavigate();

//     const [user, setUser] = useState({
//         name: "",
//         username: "",
//         phone: "",
//         email: ""
//     });

//     const { id } = useParams();

//     const fetchUsersForEdit = async () => {
//         const result = await axios.get(`http://localhost:3003/users/${id}`);
//         setUser(result.data);
//     }

//     useEffect(() => {
//         fetchUsersForEdit();
//     }, []);
     
//     const ontextChange = (evt) => {
//         setUser({...user, [evt.target.name] : evt.target.value});
//     }    
    
//     const { name, username, phone, email} = user;
//     return(        
//         <div className="container">
//             <Link className="btn btn-primary mb-2" to={"/"}>Home</Link>  
//             <form className="form shadow">   
//                 <label className="mt-2" for="Name">Name</label><br/>  
//                 <input placeholder="Name" type="text" id="Name" name="name" value={name} onChange={(evt)=> ontextChange(evt)} /><br/> 
//                 <label className="mt-2" for="username">User Name</label><br/>
//                 <input placeholder="User Name" type="text" id="username" name="username" value={username} onChange={(evt)=> ontextChange(evt)} /><br/>
//                 <label for="phone">Number</label><br/>  
//                 <input placeholder="0000-0000-00" type="phone" id="phone" name="phone" value={phone} onChange={(evt)=> ontextChange(evt)} /><br/>  
//                 <label className="mt-2" for="email">Email</label><br/>
//                 <input placeholder="Enter your email" type="email" id="email" name="email" value={email} onChange={(evt)=> ontextChange(evt)} /><br/>
//                 <Link className="btn btn-success mt-2" to={"/"}>Back to Home</Link>  
//             </form> 
//         </div>
//     )    
// }

// export default ViewUser;
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
      </ul>
      <Link className="btn btn-primary mt-2" to="/">
        back to Home
      </Link>
    </div>
  );
};

export default ViewUser;