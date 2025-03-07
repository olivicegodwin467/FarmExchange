import { useState, useEffect } from 'react';
import Axios from 'axios';


function CustomersData() {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const getUsers = () => {
      Axios.get('http://localhost:8000/api/customer/fetch')
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      getUsers();
    }, []);

    // Filter users based on the search query
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="customers-container">
        <h1 className="title">Contact List</h1>

        {/* Search Bar */}
        <input 
          type="text" 
          className="search-bar"
          placeholder="Search by name, profession, email, or phone..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />

        {filteredUsers.length > 0 ? (
          <ul className="user-list">
            {filteredUsers.map((user) => (
              <li key={user.id} className="user-item">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Profession:</strong> {user.proffesion}</p>
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}

        <div className="button-container">
          <button className="button">Add new contact</button>
          <button className="button">Edit contact</button>
          <button className="button">Delete contact</button>
        </div>
      </div>
    );
}

export default CustomersData;
