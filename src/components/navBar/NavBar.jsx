import React, { useState, useEffect } from 'react';
import useStyles from './NavBarStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AppBar, Button } from '@mui/material';
const NavBar = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.navbar}>
      <Grid item xs={12} md={9}>
        <img className={classes.logo} src={"/logo.PNG"} alt="Logo"/>
      </Grid>
      <Grid item xs={12} md={3}>
      <Button sx={{ margin:"35px 0px 35px -120px", fontSize:20, textTransform:"none",
        fontFamily:"MenschRegular", fontWeight:"medium", color: "#FFFFFF" }}
        type="text" href={"/"} className={classes.buttons}>Home</Button>
      <Button sx={{ margin:"35px 30px 35px 50px", fontSize:20, textTransform:"none",
        fontFamily:"MenschRegular", fontWeight:"medium", color: "#FFFFFF" }} 
        type="text" href={"/wallet"} className={classes.buttons}>Wallet</Button>
      <Button sx={{ margin:"35px 40px 35px 20px", fontSize:20, textTransform:"none",
        fontFamily:"MenschRegular", fontWeight:"medium", color: "#FFFFFF" }} 
        type="text" href={"/about"} className={classes.buttons}>Contact</Button>
         <Button sx={{ margin:"35px 30px 35px 5px", fontSize:20, textTransform:"none",
        fontFamily:"MenschRegular", fontWeight:"medium", color: "#FFFFFF" }}
        type="text" href={"/login"} className={classes.buttons}>Sign in</Button>
      </Grid>
    </Grid>
  );
};

export default NavBar;
