import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useStyles from "../cryptoPage/CryptoPageStyles";

const CryptoItem = (props) => {
  const classes = useStyles();
  const data = props.dane;
  return (
    <Grid container item xs={12} md={10} spacing={0} mt={3} className={classes.crypto}>
        <Grid item xs={3}>
            <img src={data.CryptoIcon} style={{height: 60, width: 60}} alt="crypto logo" className={classes.image}></img>
        </Grid>
        <Grid item xs={8}>
          <Typography sx={{fontSize: 20, fontSmooth: 50, fontWeight: "medium"}} mt={1}>
            {data.CryptoName}
          </Typography>
          <Typography sx={{fontSize: 18, fontSmooth: 50, fontWeight: "medium", letterSpacing: 3, color: "#B6C3D8"}} mt={1}>
            {data.CryptoAbbreviation}
          </Typography>
          <Typography sx={{fontSize: 18, fontSmooth: 50, fontWeight: "bold"}} mt={1} mb={1}>
            {data.CryptoCurrentPrice} PLN
          </Typography>
        </Grid>
      </Grid>
  );
};

export default CryptoItem;
