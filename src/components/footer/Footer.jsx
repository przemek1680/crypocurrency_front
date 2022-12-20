import React, { useState, useEffect } from 'react';
import useStyles from './FooterStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const NavBar = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid item xs={12} md={12} className={classes.copy}>
        <Typography sx={{mt:"15px"}} >© Copyrights</Typography>
        <FacebookIcon className={classes.icons} color="primary"></FacebookIcon>
        <InstagramIcon className={classes.icons} color="primary"></InstagramIcon>
        <TwitterIcon className={classes.icons} color="primary"></TwitterIcon>
      </Grid>
    </Grid>
  );
};

export default NavBar;
