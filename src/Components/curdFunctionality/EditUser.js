import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router';
import { Link } from "react-router-dom";


const EditUser = () => {
    let history = useNavigate();

    const [user, setUser] = useState({
        name: "",
        username: "",
        phone: "",
        email: ""
    });

    const { id } = useParams();

    const fetchUsersForEdit = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
    }

    useEffect(() => {
        fetchUsersForEdit();
    }, []);
     
    const ontextChange = (evt) => {
        setUser({...user, [evt.target.name] : evt.target.value});
    }
    
    const onsubmit = async (evt) => {
        evt.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history("/");
    }
    
    const { name, username, phone, email} = user;
    return(        
        <div className="container">
            <Link className="btn btn-primary mb-2" to={"/"}>Home</Link>  
            <form onSubmit={evt => onsubmit(evt)} className="form shadow">   
                <label className="mt-2" for="Name">Name</label><br/>  
                <input placeholder="Name" type="text" id="Name" name="name" value={name} onChange={(evt)=> ontextChange(evt)} /><br/> 
                <label className="mt-2" for="username">User Name</label><br/>
                <input placeholder="User Name" type="text" id="username" name="username" value={username} onChange={(evt)=> ontextChange(evt)} /><br/>
                <label for="phone">Number</label><br/>  
                <input placeholder="0000-0000-00" type="phone" id="phone" name="phone" value={phone} onChange={(evt)=> ontextChange(evt)} /><br/>  
                <label className="mt-2" for="email">Email</label><br/>
                <input placeholder="Enter your email" type="email" id="email" name="email" value={email} onChange={(evt)=> ontextChange(evt)} /><br/>
                <button className="btn btn-warning mt-2">Save Changes</button>  
            </form> 
        </div>
    )    
}

export default EditUser;