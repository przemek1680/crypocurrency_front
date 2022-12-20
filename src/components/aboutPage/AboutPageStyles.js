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
    padding:"40px",
    textAlign:"justify"
  },
  questions: {
    textAlign: 'center',
    paddingTop: '40px',
    paddingBottom: '20px',
  },
  contact:{
    padding:"40px",
    textAlign:"center",
    lineHeight:"20px",
  },
  map:{
    padding:"20px",
    width:"93%",
    height:"auto",
    marginLeft:"auto",
    marginRight:"auto",
  },
  image:{
    width:"93%",
    height:"auto",
    paddingTop:"20%",
    marginLeft:"auto",
    marginRight:"auto"
  }
}));
export default useStyles;
