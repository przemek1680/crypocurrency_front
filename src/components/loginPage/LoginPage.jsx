import React, { useState, useEffect } from 'react';
import useStyles from './LoginPageStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Loader from '../loader/Loader';
import { ErrorMessage } from '@hookform/error-message';
import Box from '@mui/material/Box';
const LoginPage = () => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm({
    mode: "onSubmit",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <Grid container item xs={12} className={classes.con} justify="center">
    <Container component="main">
    <div style={{
        marginTop:'-250px',
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
    }}>
    <Grid item>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/9/95/OOjs_UI_icon_lock.svg"} style={{height: 60, width: 60}} alt="logo" className={classes.image}></img>
        </Grid>
      <Typography component="h1" variant="h5" sx={{textAlign:"center"}}>
        Sign in to cryptounits
      </Typography>
      </div>
    <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '25px',
        borderStyle: 'solid',
        padding:'15px'
    }}>
        
      <FormControl onSubmit={""}>
        <form role="form" noValidate className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="userName"
                  defaultValue=""
                  label='UserName'
                  name="userName"
                  autoFocus
                  {...register}
                />
            </Grid>
            <Grid item xs={12}>
            <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  defaultValue=""
                  {...register}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
            </Grid>
          </Grid>
          {error && <Alert severity="warning">Error</Alert>}
          <Loader
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            isLoading={isLoading}
          >
            Sign in
          </Loader>
        </form>
      </FormControl>
    </div>
    <Box mt={8}></Box>
  </Container>
  <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        marginTop:"160px",
        transform: 'translate(-50%, -50%)',
        borderRadius: '20px',
        borderStyle: 'solid',
        padding:'15px'
    }}>
         <Typography variant="h7" sx={{textAlign:"center"}}>
        New to cryptounits? <a href="/" style={{ textDecoration: 'none' }}>Create an account</a>
      </Typography>
        </div>
        <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        marginTop:"240px",
        transform: 'translate(-50%, -50%)',
        padding:'15px'
    }}>
        <a href="/" style={{ textDecoration: 'none', padding:'10px' }}>Terms</a>
        <a href="/" style={{ textDecoration: 'none', padding:'10px' }}>Privacy</a>
        <a href="/" style={{ textDecoration: 'none', padding:'10px' }}>Security</a>
        <a href="/" style={{ textDecoration: 'none', padding:'10px' }}>Contact cryptounits</a>
    </div>
  </Grid>
  );
};

export default LoginPage;
