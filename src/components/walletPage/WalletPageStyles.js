import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { areOptionsEqual } from '@mui/base';

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  about: {
    padding:"45px",
    textAlign:"justify",
  },
  questions: {
    textAlign: 'left',
    margin: '0px 0px 0px 0px',
    paddingTop: '20px',
    paddingLeft: '90px',
    paddingRight: '90px',
    paddingBottom: '60px',
    background: '#FBFDFF'
  },
  questionsGrid: {
    textAlign: 'left',
    paddingTop: '20px',
    paddingBottom: '40px'
  },
  contact:{
    padding:"60px",
    textAlign:"center"
  },
  map:{
    padding:"20px",
    width:"93%",
    height:"auto",
    marginLeft:"auto",
    marginRight:"auto",
    marginBottom:"20px"
  },
  image:{
    width:"90%",
    height:"auto",
    paddingTop:"25%",
    marginLeft:"auto",
    marginRight:"auto"
  }
}));
export default useStyles;
