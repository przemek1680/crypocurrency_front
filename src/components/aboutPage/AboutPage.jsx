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
import Img1 from "../../image/img1.jpeg";
const AboutPage = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <NavBar></NavBar>
      <Grid item xs={12} md={6} className={classes.about}>
        <Typography align="center" variant="h4">
          About us
        </Typography>
        <Typography className={classes.about}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec ut aliquam sem, eu ornare dolor. Fusce tempus, dui
          faucibus facilisis pulvinar, ex sem sodales ex, eu tempor
          nibh dui ac sapien. Proin condimentum est sagittis elementum
          molestie. Curabitur et aliquet orci, tristique blandit erat.
          Integer iaculis nulla erat, et ultricies urna elementum
          cursus. Praesent quis mi varius, vulputate purus in,
          fermentum sem. Etiam mollis diam arcu, eu auctor tellus
          cursus vel. Nunc tincidunt nisi nec efficitur bibendum.
          Aenean posuere orci ac purus congue, et pulvinar enim
          cursus. Morbi fermentum sit amet felis eget scelerisque.
          Vestibulum eu justo est. In hac habitasse platea dictumst.
          Proin et aliquet dui. Duis vehicula pretium quam id congue.
          Vestibulum sit amet elit vel metus elementum porttitor.
          Proin a euismod tellus. Etiam efficitur euismod sodales.
          Proin ac leo enim. Integer elit augue, viverra sit amet mi
          sit amet, volutpat pretium augue. Duis non lacus purus.
          Maecenas et justo a mi posuere feugiat. Maecenas blandit
          arcu ante, sed vehicula tortor lacinia sit amet. Suspendisse
          dignissim metus ligula, ut commodo nunc malesuada non.
          Suspendisse id nisi at est ultrices sagittis quis ut leo.
          Morbi nulla massa, tristique at porta non, semper sed ex.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src={Img1} className={classes.image}></img>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.questions}>
          Najczęściej zadawane pytania
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Pytanie 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Pytanie 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Pytanie 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Pytanie 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo
              lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} md={6} className={classes.contact}>
        <Typography variant="h4" sx={{mt:"90px"}}>Skontaktuj się z nami!</Typography>
        <Typography sx={{mt:"25px"}}>Crypocurrency</Typography>
        <Typography>Aleja Armii Krajowej 21</Typography>
        <Typography>42-202 Częstochowa</Typography>
        <Typography>kontakt@crypocurrency.com</Typography>
      </Grid>
      <Grid item xs={12} md={6} >
          <img src={Map} className={classes.map}></img>
      </Grid>
      <Footer></Footer>
    </Grid>
   
  );
};

export default AboutPage;
