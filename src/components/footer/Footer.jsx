import React, { useState, useEffect } from 'react';
import useStyles from './FooterStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';
const NavBar = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.footer}>
      <Grid item xs={3}>
    </Grid>
      <Grid item xs={6} className={classes.copyrights}>
        <Typography sx={{mt:"15px", fontSize:20, fontWeight:"medium", textTransform:"-moz-initial"}} >cryptounits.com</Typography>
        <Typography sx={{mt:"10px", mb:"40px", fontSize:16, fontWeight:"medium", textTransform:"-moz-initial"}} >© Copyrights</Typography>
      </Grid>
      <Grid item xs={3} className={classes.socials}>
        <Button sx={{mt:"30px" }} type="text" href={"https://www.facebook.com"}>
          <FacebookIcon sx={{ fontSize:30 }} className={classes.icons} color="primary"></FacebookIcon >
        </Button>
        <Button sx={{mt:"30px" }} type="text" href={"https://www.instagram.com"}>
          <InstagramIcon sx={{ fontSize:30 }} className={classes.icons} color="primary"></InstagramIcon>
        </Button>
        <Button sx={{mt:"30px" }} type="text" href={"https://www.twitter.com"}>
          <TwitterIcon sx={{ fontSize:30 }} className={classes.icons} color="primary"></TwitterIcon>
        </Button>
      </Grid>
    </Grid>
  );
};

export default NavBar;
