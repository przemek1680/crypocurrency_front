import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useStyles from "../cryptoPage/CryptoPageStyles";
import Image from "../../image/btc.png"

const CryptoItem = (props) => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} md={10}className={classes.crypto}>
        <Grid item xs={4}>
            <img src={Image} className={classes.image}></img>
        </Grid>
        <Grid item xs={8}>
        <Typography mt={1}>BitCoin</Typography>
        <Typography mt={1}>BTC</Typography>
        <Typography mt={1} mb={1}>91,421.4 PLN</Typography>
        </Grid>
      </Grid>
  );
};

export default CryptoItem;
