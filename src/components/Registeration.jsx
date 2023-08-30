import React from "react";
import "../styles/login.scss";
import { Grid, Box, Typography, TextField, Switch, Label, Button, Link } from "@mui/material"
import Reg_Image from "../assests/Registeration_Image"
import icon from "../assests/Login_header"
import { grey } from "@mui/material/colors";
const Registeration = () => {

    const handleSubmit = (e) => {
        console.log("Event Log...");
    }
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <div>
            <Grid container>
                <Grid item xs={4} className="loginGrid">
                    <div>
                        <img alt=" " src={icon} />
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                textAlign: "left"

                            }}
                        >
                            <div className="loginSignIn">
                                <Typography component="h1" variant="h5" >
                                    <div  >Sign Up</div>
                                </Typography>
                                <h8>Create your Account</h8>
                            </div>

                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    variant="filled"
                                    size="small"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    variant="filled"
                                    size="small"
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    variant="filled"
                                    size="small"
                                />
                                <Switch {...label} defaultChecked />
                            </Box>
                            <Button
                                type="submit"

                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register </Button>

                            <Grid item>
                                <Link href="/" variant="body2">
                                    Have an Account
                                    {"? Sign in"}
                                </Link>
                            </Grid>

                        </Box>

                    </div>

                </Grid>
                <Grid item xs={6} className="imageGrid">
                    <img alt=" " src={Reg_Image} width="900" height="800" />
                </Grid>
            </Grid>
        </div>
    );
};


export default Registeration;