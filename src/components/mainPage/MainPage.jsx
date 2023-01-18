import React, { useState, useEffect } from 'react';
import useStyles from './MainPageStyles';
import Grid from '@mui/material/Grid';
import AboutPage from "../aboutPage/AboutPage";
import Typography from '@mui/material/Typography';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import CryptoPage from "../cryptoPage/CryptoPage";
import DescPage from "../DescPage/DescPage";
import Divider from '@mui/material/Divider';
const MainPage = () => {
  const classes = useStyles();

  return (
    <Grid container item>
      <NavBar></NavBar>
        <Grid item xs={12} className={classes.main}>
          <DescPage/>
          
          <CryptoPage/>
        </Grid>
      <Footer></Footer>
    </Grid>
  );
};

export default MainPage;
