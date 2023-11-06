import React, { useState, useEffect } from 'react';
import Appbar from '../components/Appbar';
// import { Box } from "@mui/material";
import Sidebar from '../components/Sidebar';
import { Box, Grid, Card, CardContent, Typography, Button, CardActions } from "@mui/material";


function Dashboard() {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [title, setTitle] = useState("Dr. Shaikh")


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
            <Sidebar open={open} handleTitle={handleTitle} />

            <h1>All User</h1>


            <Box className="main-container">
                <Grid container spacing={4}>
                    {users.map(user => {
                        const { id, address, name, specialist, portfolioImage } = user;
                        return (
                            <Grid item xs={12} sm={6} md={3} key={id}>
                                <Card>
                                    <CardContent>
                                        <img src={`${portfolioImage}`} alt="" />
                                        <Typography variant="h5">{name}</Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="body2">{specialist}</Typography>
                                        <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="body3">
                                            {address}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained" sx={{
                                            display: "flex",
                                            marginLeft: "91px",


                                        }} size="small">View Profile</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Box>
        //
        //     
        // </React.Fragment>
    );
}

export default Dashboard;
