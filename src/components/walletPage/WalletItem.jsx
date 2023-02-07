import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useStyles from "../walletPage/WalletPageStyles";
import Button from '@mui/material/Button';

const WalletItem = (props) => {
  const classes = useStyles();
  const data = props.dane;
  const cryptoAmmount = Math.random();
  return (
    <Grid container item xs={10} md={11} spacing={0} mt={3} className={classes.crypto}>
      <Grid item marginRight="2%">
        <img src={data.CryptoIcon} style={{height: 60, width: 60}} alt="crypto logo" className={classes.image}></img>
      </Grid>
      <Grid item xs={8}>
        <Typography sx={{fontSize: 20, fontSmooth: 50, fontWeight: "medium", fontFamily:"MenschRegular"}} mt={1} display="inline" marginRight="2%">
          {data.CryptoName}
        </Typography>
        <Typography sx={{fontSize: 18, fontSmooth: 50, fontWeight: "medium", letterSpacing: 3, color: "#B6C3D8", fontFamily:"MenschRegular"}} mt={1} display="inline">
          {data.CryptoAbbreviation}
        </Typography>
        <Typography sx={{fontSize: 18, fontSmooth: 50, fontWeight: "bold", fontFamily:"MenschRegular"}} mt={1} mb={1}>
          Price {data.CryptoCurrentPrice} PLN
        </Typography>
        <Typography sx={{fontSize: 18, fontSmooth: 50, fontWeight: "bold", fontFamily:"MenschRegular"}} mt={1} mb={1} display="inline" marginRight="2%">
          Balance {cryptoAmmount} {data.CryptoAbbreviation}
        </Typography>
        <Typography sx={{fontSize: 18, fontSmooth: 50, fontWeight: "bold", fontFamily:"MenschRegular"}} mt={1} mb={1} display="inline">
          {(cryptoAmmount * data.CryptoCurrentPrice).toFixed(2)} PLN
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Button fullWidth="true" variant="outlined" style={{margin: '5px'}} size="large">Sell</Button>
        <Button fullWidth="true" variant="outlined" style={{margin: '5px'}} size="large">Buy</Button>
      </Grid>
    </Grid>
  );
};

export default WalletItem;
