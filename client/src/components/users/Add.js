import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddUser() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label=" Enter Username" />
      <br/>
      <TextField id="standard-basic" label=" Enter Email" />
      <br/>
      <TextField id="standard-basic" label=" Enter Password" />
      <br/>
      <Button variant="contained" color="primary">
         Add User
      </Button>

      
    </form>
  );
}