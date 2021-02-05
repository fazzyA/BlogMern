<<<<<<< HEAD
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


=======
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

function SingleUser() {
    const [user, setuser] = useState({})
    let {id} = useParams();
useEffect(()=>{
// get single user
const getUser = async ()=>{
    const res = await axios.get(`http://localhost:4000/api/users/${id}`)
    console.log(res.data.data);
    setuser(res.data.data)
}
getUser()

},[])
console.log(id);
    return (
        <div>
           <Paper elevation={3}>
           <div>{user.name}</div>
           <div>{user.email}</div>
           </Paper>
        </div>
    )
}

export default SingleUser
>>>>>>> 0c6624c3b192a768aa123f3605f254f8df355fec
