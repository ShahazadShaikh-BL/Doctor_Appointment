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
            <div class="container">
                <div class="wrapper">
                    <div class="box a">.a</div>
                    <Grid container >
                   
                    <Grid item xs={8}>
                    <Grid item container xs={4}>
                    <img alt=" " src={Login_Image} />
                    </Grid>
  </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};


export default Login;