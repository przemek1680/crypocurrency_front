import React, { useState, useEffect } from 'react';
import useStyles from './NavBarStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const NavBar = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.navbar}>
      <Grid item xs={12} md={10}>
        <Typography variant="h1" className={classes.logo}>
          LOGO
        </Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <HomeIcon
          sx={{ fontSize: 40 }}
          className={classes.icons}
        ></HomeIcon>
        <InfoIcon
          sx={{ fontSize: 40 }}
          className={classes.icons}
        ></InfoIcon>
        <AccountCircleIcon
          sx={{ fontSize: 40 }}
          className={classes.icons}
        ></AccountCircleIcon>
      </Grid>
    </Grid>
  );
};

export default NavBar;
