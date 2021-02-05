import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { StayPrimaryLandscape } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  
paper: {
    height: 500,
    width: 400,
    color: '#283593',
    backgroundcolor: '#FBCB44',
    margin: '0 auto',
    textAligh: 'right',
    padding: 15
    },
    input: {
      height: 500,
      width: '500%',
    textAligh: 'center',
     
     
    }   
}));


export default function SingleUser() {
  const classes = useStyles();

  return (
    <div >
    
    <Paper elevation={3} className={classes.paper}>
      <h1>User Information</h1>
      <TextField
          id="standard-read-only-input" 
          label="Read Only"
          defaultValue="Name: Abeer"
          InputProps={{
            readOnly: true,
          }}
        /><br/><br/><br/>
         <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="User Name: Abeer" 
          InputProps={{
            readOnly: true,
          }}
        /><br/><br/><br/>
         <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Email ID: abeer@gmail.com"
          InputProps={{
            readOnly: true,
          }}
        /><br/><br/><br/>
         <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Phone Number: 021345678"
          InputProps={{
            readOnly: true,
            
          }}
        />
        <br/>
        <br/><br/><br/>
         <ButtonGroup variant="contained" color="secondary" aria-label="contained primary button group">
        <Button>Edit</Button>
        <Button>Submit</Button>
        <Button>Review</Button>
      </ButtonGroup>

      </Paper>
  </div>
  );
}


