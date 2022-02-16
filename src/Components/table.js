import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Table = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:3003/users");
    setUsers(response.data);
  };

  return (
    <div className="container">   
    <Link className="btn btn-primary mb-2" to="/add">Add User</Link> 
    <table className="table border shadow">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">User-Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr>
            <th>{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td> 
            <td>
                <Link className="btn btn-primary" to={`/users/${user.id}`}>
                        View
                </Link>
                <Link className="btn btn-outline-success" to={`/users/edit/${user.id}`}>
                        Edit
                </Link>
                {/* <Link className="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>
                        Delete
                </Link> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
