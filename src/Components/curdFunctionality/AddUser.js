import axios from "axios";
import React, {useState} from "react";
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";


const AddUser = () => {
    let history = useNavigate();

    const [user, setUser] = useState({
        id: "",
        name: "",
        username: "",
        phone: "",
        email: ""
    });
    
    const ontextChange = (evt) => {
        setUser({...user, [evt.target.name] : evt.target.value});
    }
    
    const onsubmit = async (evt) => {
        evt.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history("/");
    }
    
    const { id, name, username, phone, email} = user;
    return(     
        <div className="container">
            {/* <h className="text-center text-primary">Add New User</h>    */}
            <Link className="btn btn-primary mb-2" to={"/"}>Home</Link>  
            <form onSubmit={evt => onsubmit(evt)} className="form shadow">  
                <label className="mt-2" for="id">Id</label><br/>  
                <input placeholder="Id must be unique" type="number" id="id" name="id" value={id} onChange={(evt)=> ontextChange(evt)} /><br/> 
                <label className="mt-2" for="Name">Name</label><br/>  
                <input placeholder="Name" type="text" id="Name" name="name" value={name} onChange={(evt)=> ontextChange(evt)} /><br/> 
                <label className="mt-2" for="username">User Name</label><br/>
                <input placeholder="User Name" type="text" id="username" name="username" value={username} onChange={(evt)=> ontextChange(evt)} /><br/>
                <label for="phone">Number</label><br/>  
                <input placeholder="0000-0000-00" type="phone" id="phone" name="phone" value={phone} onChange={(evt)=> ontextChange(evt)} /><br/>  
                <label className="mt-2" for="email">Email</label><br/>
                <input placeholder="Enter your email" type="email" id="email" name="email" value={email} onChange={(evt)=> ontextChange(evt)} /><br/>
                <button className="btn btn-primary mt-2">Add</button>  
            </form> 
        </div>
    )    
}

export default AddUser;