import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import "../styles/login.scss";
import { Grid, Box, Typography, TextField, Switch, Label, Button, Link } from "@mui/material"
import Login_Image from "../assests/Login_Image"
import icon from "../assests/Login_header"
import { grey } from "@mui/material/colors";

//const navigate = useNavigate();
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
   
    const handleSubmit = (event) => {
        let errorFlag = false;

        event.preventDefault();
        // console.log("Event Log...",e);  
        setEmailError(false);
        setPasswordError(false);

        if (email === "") {
            errorFlag = true;
            setEmailError(true);
        }
        if (password === "") {
            errorFlag = true;
            setPasswordError(true);
        }

        // if (errorFlag) {
        //     alert("Login Error")
        // }
        // else {
        //     alert("Login Sucess")
           
        // }
      
        const data = new FormData(event.currentTarget);
        var emailLogin=localStorage.getItem("email")
        var passLogin=localStorage.getItem("password")
        console.log("My Pass from Reg", passLogin);
        if(data.get("email")==emailLogin && data.get("password")==passLogin)
        {
            navigate("/dashboard");
        }
        else
        {
            alert("Password and email is not p")
        }
       
      
        // console.log({
        //     email: data.get("email"),
        //     password: data.get("password"),
            
        // });

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
                                    <div  >Login Form</div>
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
                                    onChange={(e) => setEmail(e.target.value)}
                                    error={emailError}
                                    helperText={emailError ? "Email cannot be empty" : ""}
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    error={passwordError}
                                    helperText={passwordError ? "Password cannot be empty" : ""}
                                />
                                {/* <Switch {...label} defaultChecked /> */}

                                <Button
                                    type="submit"

                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In </Button>
                            </Box>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Don't have an account
                                    {"? Sign Up"}
                                </Link>
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