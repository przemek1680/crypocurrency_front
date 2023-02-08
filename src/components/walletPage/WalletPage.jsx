import React, { useState, useEffect } from 'react';
import useStyles from './WalletPageStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from '../navBar/NavBar';
import Map from '../../image/map.png';
import Footer from '../footer/Footer';
import CryptoPage from "../cryptoPage/CryptoPage";
import DescPage from "../DescPage/DescPage";
import {cryptoDetails} from "../../api/cryptoClient";
import WalletItem from '../walletPage/WalletItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const WalletPage = () => {
  const classes = useStyles();
  const [crypto, setCrypto] = useState([]);

  const [selectedCrypto, setSelectedCrypto] = useState("");

  async function fetchDetails(){
    const response = await cryptoDetails();

    setCrypto(response.data);
    console.log(response.data);
  }

  useEffect(() =>{
    fetchDetails();
  }, []);

  return (
    <Grid container item>
      <NavBar></NavBar>
        <Grid item xs={12} className={classes.main}>
          <Grid container item className={classes.main}>
            <Grid item xs={12}>
              <Typography sx={{margin: "30px 50px 10px 85px", align:"left", fontFamily:"MenschRegular"}} variant="h4" >
                Portfolio
              </Typography>
              <Grid xs={11} marginX="5%">
                <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="selectedCrypto"
                        
                        defaultValue=""
                        label="Search for crypto"
                        name="selectedCrypto"
                        inputProps={{ style: { fontFamily:"MenschRegular", fontSize: 18, color: "black" } }}
                        autoFocus
                        onChange={(e) => {
                                 setSelectedCrypto(e.target.value)
                               }}
                      />
              </Grid>
            </Grid>
            {crypto
              .filter(function (element) {
                if (!selectedCrypto) return true;
                return element.CryptoName.toLowerCase().includes(selectedCrypto.toLowerCase());
              })
              .map((data, index)=>(
                <Grid item xs={12} direction="column" key={index}>
                  <Box justifyContent = "space-around" display = "flex" alignItems = "center">
                    <WalletItem dane={data}></WalletItem>
                  </Box>
                </Grid>
              ))
              .reverse()}
          </Grid>
        </Grid>
      <Footer></Footer>
    </Grid>
  );
};

export default WalletPage;
