import React, { useState, useEffect } from 'react';
import useStyles from './RegistePageStyles';
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
import {newUser} from '../../api/userClient';

const RegisterPage = () => {
  const classes = useStyles();
  const [photo, setPhoto] = useState("https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=")
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const handleChange = event => {
    setPhoto(event.target.value);
  }
  async function addUser(data){
    try{
    const response = await newUser(
      data.firstname,
      data.lastname,
      data.email,
      data.image,
      data.password
    );
    } catch(error){
      console.log(error);
    }
  }
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <Grid container item xs={12} className={classes.con} justify="center">
    <Container component="main">
    <div style={{
        marginTop:'-260px',
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
      <Grid item>
            <img src={photo} style={{height: 70, width: 70}} alt="user" className={classes.image}></img>
      </Grid>
      <Typography component="h1" variant="h5" sx={{textAlign:"center", fontSize:28, fontFamily:"MenschRegular", marginTop:"10px"}}>
        Sign up to cryptounits.com
      </Typography>
    </div>
    <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        marginTop:"100px",
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FBFDFF',
        borderRadius: '25px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: "#EAF2FF",
        padding:'15px',
        maxWidth:'500px'
    }}>
        
      <FormControl onSubmit={handleSubmit(addUser)}>
        <form role="form" noValidate className={classes.form}>
          <Grid container spacing={1} columnGap={2}>
          <Grid item xs={12}>
            <TextField 
                  variant="outlined"
                  margin="normal"
                  id="firstname"
                  defaultValue=""
                  fullWidth
                  label="First Name"
                  name="firstname"
                  inputProps={{ style: { fontFamily:"MenschRegular", fontSize: 18, color: "black" } }}
                  autoFocus
                  required
                  {...(register('firstname'))}
                />
            </Grid>
            <Grid item xs={12} >
            <TextField 
                  variant="outlined"
                  margin="normal"
                  id="lastname"
                  defaultValue=""
                  fullWidth
                  label="Last Name"
                  name="lastname"
                  inputProps={{ style: { fontFamily:"MenschRegular", fontSize: 18, color: "black" } }}
                  autoFocus
                  required
                  {...(register("lastname"))}
                />
            </Grid>
            <Grid item xs={12} >
            <TextField 
                  variant="outlined"
                  margin="normal"
                  id="image"
                  defaultValue=""
                  fullWidth
                  label="Image URL"
                  name="image"
                  inputProps={{ style: { fontFamily:"MenschRegular", fontSize: 18, color: "black" } }}
                  autoFocus
                  onChange={handleChange}
                  {...(register("image"))}
                />
            </Grid>
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
                  required
                  {...(register('email'))}
                />
            </Grid>
            <Grid item xs={12}>
            <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  defaultValue=""
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  required
                  {...(register('password'))}
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
            Sign up
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
        marginTop:"420px",
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
    Already have an account? <a href="/login" className={classes.register}>Sign in</a>
    </Typography>
  </div>
  
  <div style={{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        marginTop: "560px",
        color: "#06073F",
        transform: 'translate(-50%, -50%)',
        padding:'15px'
    }}>
        <Button sx={{ fontSize:16, textTransform:"none", fontFamily:"MenschRegular", 
        fontWeight:"medium", color: "#06073F" }} type="text" href="/" className={classes.buttons}>Home
        </Button>
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

export default RegisterPage;
