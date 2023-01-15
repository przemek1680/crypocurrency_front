import React, { useState, useEffect } from 'react';
import useStyles from './CryptoPageStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CryptoItem from './CryptoItem';
const CryptoPage = () => {
  const classes = useStyles();

  return (
    <Grid container item className={classes.main}>
      <Grid item xs={12}>
      <Typography className={classes.title}>Aktualne kursy kryptowalut</Typography>
      </Grid>
      <Grid item xs={12} md={6} mt={2} mb={2}>
        <CryptoItem/>
      </Grid>
      <Grid item xs={12} md={6} mt={2} mb={2}>
        <CryptoItem/>
      </Grid>
      <Grid item xs={12} md={6} mt={2} mb={2}>
        <CryptoItem/>
      </Grid>
      <Grid item xs={12} md={6} mt={2} mb={2}>
        <CryptoItem/>
      </Grid>
      <Grid item xs={12} md={6} mt={2} mb={2}>
        <CryptoItem/>
      </Grid>
      <Grid item xs={12} md={6} mt={2} mb={2}>
        <CryptoItem/>
      </Grid>
      <Grid item xs={12} md={6} mt={2} mb={2}>
        <CryptoItem/>
      </Grid>
      <Grid item xs={12} md={6} mt={2} mb={2}>
        <CryptoItem/>
      </Grid>
      <Grid item xs={12} md={6} mt={2} mb={2}>
        <CryptoItem/>
      </Grid>
    </Grid>
  );
};

export default CryptoPage;
