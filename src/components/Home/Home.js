import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUsers] = useState([]);

    const handleUserDelete = id => {
        
    }
    useEffect(() => {
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h2>Available users: {users.length}</h2>
            <ul>
                {users.map(user => <li key={user._id}>{user.name}: {user.email}
                <button onClick={() => handleUserDelete(user._id)}>X</button>
                </li>)}
            </ul>
        </div>
    );
};

export default Home;