import React, { useState, useEffect } from 'react';
import Appbar from '../components/Appbar';
import { Box } from "@mui/material";
import Sidebar from '../components/Sidebar';

function Dashboard() {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [title, setTitle]=useState("Dr. Shaikh")
   

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

    const handleSearch = (searchValue) => {
        console.log("Search Value", searchValue);
        setSearch(searchValue);
      };

    const handleDrawerOpen = () => {
        console.log("App bar open", open);
          setOpen((prevStates) => {
            return !prevStates;
          });
        };

        function handleTitle(title) {
            console.log("Set Title", title);
            setTitle(title);
          }
        
    return (
        <Box >
        <Appbar handleDrawerOpen={handleDrawerOpen} handleSearch={handleSearch} title={title} />
        <Sidebar open={open} handleTitle={handleTitle}/>
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
