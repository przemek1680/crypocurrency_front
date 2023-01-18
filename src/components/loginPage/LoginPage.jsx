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
import { Button } from '@mui/material';
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
        marginTop:'-235px',
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
      <Grid item>
            <img src={"/small_logo.PNG"} style={{height: 70, width: 70}} alt="small logo" className={classes.image}></img>
      </Grid>
      <Typography component="h1" variant="h5" sx={{textAlign:"center", fontSize:28, fontFamily:"MenschRegular", marginTop:"30px"}}>
        Sign in to cryptounits.com
      </Typography>
    </div>
    <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FBFDFF',
        borderRadius: '25px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: "#EAF2FF",
        padding:'15px'
    }}>
        
      <FormControl onSubmit={""}>
        <form noValidate className={classes.form}>
          <Grid container spacing={1} columnGap={2}>
            <Grid item xs={12}>
            <TextField 
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  defaultValue=""
                  label="E-mail Address"
                  name="email"
                  inputProps={{ style: { fontFamily:"MenschRegular", fontSize: 18, color: "black" } }}
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
          <Loader sx = {{textTransform: "none", fontFamily: "MenschRegular", fontSize: 16, marginTop: "10px"}}
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
        marginTop:"180px",
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FBFDFF',
        borderColor: "#EAF2FF",
        borderWidth: '2px',
        borderRadius: '15px',
        borderStyle: 'solid',
        fontFamily:"MenschRegular",
        fontSize: 16,
        padding:'15px'
    }}>
    <Typography variant="h7" sx={{textAlign:"center"}}>
      New to cryptounits? <a href="/" className={classes.register}>Create an account</a>
    </Typography>
  </div>
  
  <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        marginTop: "320px",
        color: "#06073F",
        transform: 'translate(-50%, -50%)',
        padding:'15px'
    }}>
        <Button sx={{ fontSize:16, textTransform:"none", fontFamily:"MenschRegular", 
        fontWeight:"medium", color: "#06073F" }} type="text" href="/about" className={classes.buttons}>Contact
        </Button>
        <Button disabled sx={{ fontSize:16, textTransform:"none", fontFamily:"MenschRegular", 
        fontWeight:"medium", color: "#06073F" }} type="text" href="/" className={classes.buttons}>Terms
        </Button>
        <Button disabled sx={{ fontSize:16, textTransform:"none", fontFamily:"MenschRegular", 
        fontWeight:"medium", color: "#06073F" }} type="text" href="/" className={classes.buttons}>Privacy
        </Button>
        <Button disabled sx={{ fontSize:16, textTransform:"none", fontFamily:"MenschRegular", 
        fontWeight:"medium", color: "#06073F" }} type="text" href="/" className={classes.buttons}>Security
        </Button>
    </div>
  </Grid>
  );
};

export default LoginPage;
