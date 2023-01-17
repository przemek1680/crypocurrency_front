import React, { useState, useEffect } from 'react';
import useStyles from './CryptoPageStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {cryptoDetails} from "../../api/cryptoClient";
import CryptoItem from './CryptoItem';
import Box from '@mui/material/Box';
const CryptoPage = () => {
  const classes = useStyles();
  const [crypto, setCrypto] = useState([]);

  async function fetchDetails(){
    const response = await cryptoDetails();

    setCrypto(response.data);
    console.log(response.data);
  }

  useEffect(() =>{
    fetchDetails();
  }, []);

  return (
    <Grid container item className={classes.main}>
      <Grid item xs={12}>
      <Typography className={classes.title}>Aktualne kursy kryptowalut</Typography>
      </Grid>
       {crypto
        .map((data, index)=>(
          <Grid item xs={12} sm={4} md={3} key={index}>
            <Box
              display="flex"
              justifyContent="space-around"
            >
              <CryptoItem dane={data}></CryptoItem>
            </Box>
          </Grid>
        ))
        .reverse()}
    </Grid>
  );
};

export default CryptoPage;
