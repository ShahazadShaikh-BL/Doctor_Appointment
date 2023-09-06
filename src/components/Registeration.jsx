import React, {useState} from "react";
import "../styles/login.scss";
import { Grid, Box, Typography, TextField, Switch, Label, Button, Link } from "@mui/material"
import Reg_Image from "../assests/Registeration_Image"
import icon from "../assests/Login_header"
import { grey } from "@mui/material/colors";

import {
    validPassword,
    validEmail,
  } from "./formValidation";
const Registeration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (event) => {
      
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log("Data", event);
        console.log({
          email: data.get("email"),
          password: data.get("password"),
        });
      };

 
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
                                // // noValidate
                                onSubmit={handleSubmit}
                                // sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="standard-error"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    variant="filled"
                                    size="small"
                                    error={nameError}
                                    helperText={nameError ? "Invalid Name" : ""}
                                    onChange={e => setName(e.target.value)}
                                    
                                />
                                
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="outlined-error"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    variant="filled"
                                    size="small"
                                    error={emailError}
                                    helperText={
                                      emailError
                                        ? "Invalid email"
                                        : "You can use letters,numbers & periods"}
                                    onChange={e => setEmail(e.target.value)}
                                  
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
                                    onChange={e => setPassword(e.target.value)} 
                                    error={passwordError}
                                    helperText={
                                      passwordError
                                        ? "Invalid password"
                                        : "Use 8 or more characters with a mix of letters, numbers & symbols"
                                    }
                                  
                                />
                                <Switch {...label} defaultChecked />
                              
                            
                            <Button
                                type="submit"
                               
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Register </Button>
                                </Box>

                            <Grid item>
                                <Link href="/login" variant="body2">
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