import React, { useState, useEffect } from 'react';
import useStyles from './DescPageStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const DescPage = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={8} className={classes.introduction}>
      <Typography sx={{margin: "0px 0px -10px 40px", align:"left", fontFamily:"MenschRegular"}} variant="h4" >
          Introduction
      </Typography>
      <Typography sx={{fontSize:18, fontFamily:"MenschRegular"}} className={classes.introduction}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui nisl,
        varius vulputate ullamcorper sit amet, elementum quis sem. Praesent nibh dolor,
        placerat suscipit fringilla id, ornare in risus. Vestibulum velit nibh,
        commodo sit amet turpis eget, fermentum condimentum quam. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
        Nulla rhoncus mi id sollicitudin accumsan. Cras commodo vestibulum sapien et volutpat.
        Aenean non nisl ut mi ultricies malesuada et at mauris. 
        Suspendisse id magna vitae libero molestie pretium iaculis malesuada ligula. 
        Quisque id tellus malesuada sapien sagittis faucibus. Aliquam iaculis blandit dolor quis convallis. 
        Cras convallis posuere massa ut posuere. 
        Maecenas et justo a mi posuere feugiat. Maecenas blandit
        arcu ante, sed vehicula tortor lacinia sit amet. <p></p>Suspendisse
        dignissim metus ligula, ut commodo nunc malesuada non.
        Suspendisse id nisi at est ultrices sagittis quis ut leo.
        Morbi nulla massa, tristique at porta non, semper sed ex.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec ut aliquam sem, eu ornare dolor. <p></p>
        Vestibulum eu justo est. In hac habitasse platea dictumst.
        Proin et aliquet dui. Duis vehicula pretium quam id congue.
        Vestibulum sit amet elit vel metus elementum porttitor.
        Proin a euismod tellus. Etiam efficitur euismod sodales.
        Proin ac leo enim. Integer elit augue, viverra sit amet mi
        sit amet, volutpat pretium augue. Aenean non nisl ut mi ultricies malesuada et at mauris. 
        Suspendisse id magna vitae libero molestie pretium iaculis malesuada ligula. 
        Quisque id tellus malesuada sapien sagittis faucibus.
      </Typography>
      </Grid>
      <Grid item xs={12} md={4} className={classes.introduction}>
        <img src={"/home_image.PNG"} alt="Image" className={classes.image}/>
      </Grid>
    </Grid>
  );
};

export default DescPage;
