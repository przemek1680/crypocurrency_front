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
      <Button sx={{ margin:"35px 0px 35px -40px", fontSize:19, textTransform:"none", fontWeight:"200", color: "#5F7DA0" }}
        type="text" href={""} className={classes.buttons}>Home</Button>
      <Button sx={{ margin:"35px 20px 35px 40px", fontSize:19, textTransform:"none", fontWeight:"300", color: "#5F7DA0" }} 
        type="text" href={""} className={classes.buttons}>Wallet</Button>
      <Button sx={{ margin:"35px 20px 35px 20px", fontSize:19, textTransform:"none", fontWeight:"300", color: "#5F7DA0" }} 
        type="text" href={""} className={classes.buttons}>Contact</Button>
      </Grid>
    </Grid>
  );
};

export default NavBar;
