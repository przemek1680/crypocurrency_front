import React, { useState, useEffect } from 'react';
import useStyles from './DescPageStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import CryptoPage from "../cryptoPage/CryptoPage";
import wallet from "../../image/wallet.jpg"

const DescPage = () => {
  const classes = useStyles();

  return (
    <Grid container>
        <Grid item xs={12} md={6} className={classes.desc} mt={4}>
      <Typography mr={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui nisl, varius vulputate ullamcorper sit amet, elementum quis sem. Praesent nibh dolor, placerat suscipit fringilla id, ornare in risus. Vestibulum velit nibh, commodo sit amet turpis eget, fermentum condimentum quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla rhoncus mi id sollicitudin accumsan. Cras commodo vestibulum sapien et volutpat. Aenean non nisl ut mi ultricies malesuada et at mauris. Suspendisse id magna vitae libero molestie pretium iaculis malesuada ligula. Quisque id tellus malesuada sapien sagittis faucibus. Aliquam iaculis blandit dolor quis convallis. Cras convallis posuere massa ut posuere.</Typography>
      </Grid>
      <Grid item xs={12} md={6} mt={4}>
       <img src={wallet} className={classes.image}></img>
      </Grid>
    </Grid>
  );
};

export default DescPage;
