import React from "react";
import "../styles/login.scss";
import {Grid} from "@mui/material"
import Login_Image from "../assests/Login_Image"
const Login = () => {

    const handleSubmit = (e) => {
        console.log("Event Log...");
    }
    return (
        <div>
          <Grid container>
     <Grid item xs={4} className="loginGrid"> 
         <div>Login</div>
         
     </Grid>
     <Grid item xs={6} className="imageGrid">
         <img alt=" " src={Login_Image}  width="900" height="600"/>
     </Grid>
     </Grid>
        </div>
    );
};


export default Login;