import React, { useState, useEffect } from 'react';
import Appbar from '../components/Appbar';
import { Box } from "@mui/material";

function Dashboard() {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const getFetchUsers = () => {
        setLoading(true);
        fetch("http://localhost:3003/posts")
            .then(res => res.json())
            .then(result => {
                setUsers(result);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err);
                setLoading(false);
            });
    }

    useEffect(() => {
        getFetchUsers();
    }, []); // Empty dependency array ensures this effect runs once on mount

    return (
        <Box >
        <Appbar />
        <h1>All User</h1>
             {error ? <p>{error.message}</p> : null}
             {users.map(user => {
                const { address, name, email } = user;
                return (
                    <div key={name}>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Address: {address}</p>
                        <hr />
                    </div>
                );
            })}
      </Box>
        //
        //     
        // </React.Fragment>
    );
}

export default Dashboard;
