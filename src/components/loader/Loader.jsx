import React from "react";
import { Button, CircularProgress } from '@mui/material';
import useStyles from "./LoaderStyles";

const Loader = (props) => {
  const { isLoading, ...buttonProps } = props;
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Button {...buttonProps} disabled={props.disabled || isLoading} className={classes.button} style={{

        backgroundColor: "#06073F",
    }}>
        {props.children}
      </Button>
      {isLoading && <CircularProgress className={classes.loader} size={24} />}
    </div>
  );
};

export default Loader;
