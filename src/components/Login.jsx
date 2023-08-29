import React from "react";
import "../styles/login.scss";
import { Grid, Box, Typography, TextField, Switch, Label, Button, Link } from "@mui/material"
import Login_Image from "../assests/Login_Image"
import icon from "../assests/Login_header"
const Login = () => {

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
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div className="loginSignIn">
                            <Typography component="h1" variant="h5" marginLeft="5px">
                                Sign in
                            </Typography>
                            <h8>Login to acces your account</h8>
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
                                    id="email"
                                    label="Login"
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
                                Sign In </Button>
                                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                        </Box>

                    </div>

                </Grid>
                <Grid item xs={6} className="imageGrid">
                    <img alt=" " src={Login_Image} width="900" height="600" />
                </Grid>
            </Grid>
        </div>
    );
};


export default Login;