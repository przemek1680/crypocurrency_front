import React, { useState, useEffect } from 'react';
import useStyles from './AboutPageStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavBar from '../navBar/NavBar';
import Map from '../../image/map.png';
import Footer from '../footer/Footer';
const AboutPage = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <NavBar></NavBar>
      <Grid item xs={12} md={8} className={classes.about}>
        <Typography sx={{margin: "0px 0px -10px 40px", align:"left", fontFamily:"MenschRegular"}} variant="h4" >
          About cryptounits.com
        </Typography>
        <Typography sx={{fontSize:18, fontFamily:"MenschRegular"}} className={classes.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec ut aliquam sem, eu ornare dolor. Fusce tempus, dui
          faucibus facilisis pulvinar, ex sem sodales ex, eu tempor
          nibh dui ac sapien. Proin condimentum est sagittis elementum
          molestie. Curabitur et aliquet orci, tristique blandit erat.
          Integer iaculis nulla erat, et ultricies urna elementum
          cursus. Praesent quis mi varius, vulputate purus in,
          fermentum sem. Etiam mollis diam arcu, eu auctor tellus
          cursus vel. Nunc tincidunt nisi nec efficitur bibendum.<p></p>
          Aenean posuere orci ac purus congue, et pulvinar enim
          cursus. Morbi fermentum sit amet felis eget scelerisque.
          Vestibulum eu justo est. In hac habitasse platea dictumst.
          Proin et aliquet dui. Duis vehicula pretium quam id congue.
          Vestibulum sit amet elit vel metus elementum porttitor.
          Proin a euismod tellus. Etiam efficitur euismod sodales.
          Proin ac leo enim. Integer elit augue, viverra sit amet mi
          sit amet, volutpat pretium augue. Duis non lacus purus.
          Maecenas et justo a mi posuere feugiat. Maecenas blandit
          arcu ante, sed vehicula tortor lacinia sit amet. <p></p>Suspendisse
          dignissim metus ligula, ut commodo nunc malesuada non.
          Suspendisse id nisi at est ultrices sagittis quis ut leo.
          Morbi nulla massa, tristique at porta non, semper sed ex.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec ut aliquam sem, eu ornare dolor.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
      <img src={"/contact_image.PNG"} alt="Image" className={classes.image}/>
      </Grid>
      <Grid item xs={12} className={classes.questions}>
        <Typography sx={{fontFamily:"MenschRegular"}} variant="h4" className={classes.questionsGrid}>
          Frequently asked questions
        </Typography>
        <Accordion >
          <AccordionSummary className={classes.questions}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{fontSize:18, fontFamily:"MenschRegular"}}>What are the outcomes of adopting crypto by governments in the future?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{fontSize:16, fontFamily:"MenschRegular", color:"#326096"}}>
            Financial regulators are now scrambling to respond. Regulations vary considerably around the world,
            with some governments embracing cryptocurrencies and others banning or limiting their use.
            Central banks around the world, including the U.S. Federal Reserve,
            are considering introducing their own digital currencies to compete with the crypto boom.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{fontSize:18, fontFamily:"MenschRegular"}}>Is crypto real money?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{fontSize:16, fontFamily:"MenschRegular", color:"#326096"}}>
            So called for their use of cryptography principles to mint virtual coins, 
            cryptocurrencies are typically exchanged on decentralized computer networks between people with virtual wallets.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{fontSize:18, fontFamily:"MenschRegular"}}>What is crypto tokenization's impact on clarifying rights and assets?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{fontSize:16, fontFamily:"MenschRegular", color:"#326096"}}>
            Cryptocurrency users send funds between digital wallet addresses. 
            These transactions are then recorded into “blocks,” and confirmed across the network. 
            Blockchains do not record real names or physical addresses, 
            only the transfers between digital wallets, and thus confers a degree of anonymity on users.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{fontSize:18, fontFamily:"MenschRegular"}}>Does the cryptocurrency market exhibits feedback trading?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{fontSize:16, fontFamily:"MenschRegular", color:"#326096"}}>
            The prices of Bitcoin and many other cryptocurrencies vary based on global supply and demand. 
            However, the values of some cryptocurrencies are fixed because they are backed by other assets, 
            thus earning them the name “stablecoins.” 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{fontSize:18, fontFamily:"MenschRegular"}}>What are the benefits of online trading?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{fontSize:16, fontFamily:"MenschRegular", color:"#326096"}}>
            Once dismissed as a fringe interest of tech evangelists, 
            cryptocurrencies—particularly Bitcoin—have skyrocketed in value in recent years. 
            In 2021, the price of a Bitcoin surged to more than $60,000 for the first time. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography sx={{fontSize:18, fontFamily:"MenschRegular"}}>What does a trade bloc mean?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{fontSize:16, fontFamily:"MenschRegular", color:"#326096"}}>
            Stablecoins, meanwhile, have the potential to rival fiat currencies as the dominant form of payments,
            experts say. Their value is relatively stable, and they can be sent instantly without the transaction
            fees associated with credit cards or international remittance services such as Western Union.
            In addition, because stablecoins can be used by anyone with a smartphone, 
            they represent an opportunity to bring millions of people who lack traditional bank accounts 
            into the financial system. 
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} md={7} className={classes.contact}>
        <Typography variant="h4" sx={{mt:"90px", fontFamily:"MenschRegular"}}>Contact with us!</Typography>
        <Typography sx={{mt:"25px", fontFamily:"MenschRegular"}}>cryptounits.com</Typography>
        <Typography sx={{fontFamily:"MenschRegular"}}>Aleja Armii Krajowej 21</Typography>
        <Typography sx={{fontFamily:"MenschRegular"}}>42-202 Czestochowa</Typography>
        <Typography sx={{fontFamily:"MenschRegular"}}>contact@cryptounits.com</Typography>
      </Grid>
      <Grid item xs={12} md={5} >
          <img src={Map} className={classes.map}></img>
      </Grid>
      <Footer></Footer>
    </Grid>
   
  );
};

export default AboutPage;
