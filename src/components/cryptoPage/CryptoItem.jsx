import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useStyles from "../cryptoPage/CryptoPageStyles";

const CryptoItem = (props) => {
  const classes = useStyles();
  const data = props.dane;
  return (
    <Grid container item xs={12} md={11} spacing={0} mt={3} className={classes.crypto}>
        <Grid item xs={3}>
            <img src={data.CryptoIcon} style={{height: 60, width: 60}} alt="crypto logo" className={classes.image}></img>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={{fontSize: 20, fontFamily:"MenschRegular"}} mt={1}>{data.CryptoName}</Typography>
          <Typography sx={{fontSize: 18, fontFamily:"MenschRegular"}} mt={1}>{data.CryptoAbbreviation}</Typography>
          <Typography sx={{fontSize: 18, fontFamily:"MenschRegular"}} mt={1} mb={1}>{data.CryptoCurrentPrice} PLN</Typography>
        </Grid>
      </Grid>
  );
};

export default CryptoItem;
