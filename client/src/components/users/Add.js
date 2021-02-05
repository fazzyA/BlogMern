import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddUser() {
  const history = useHistory()
  const [state, setstate] = useState({
    name:'',email:'', username:'',role:'',password:''
  })
  const classes = useStyles();


const handleSubmit =async (e)=>{
  e.preventDefault();
console.log('im in submit');
const res = await axios.post('http://localhost:4000/api/users/',state)
console.log(res);
history.push('/List')
//
  }
console.log(state);
  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField id="username" onChange={(e)=>setstate({...state, username:e.target.value})} label=" Enter Username" />
      <br/>
      <TextField id="name" onChange={(e)=>setstate({...state,name:e.target.value})} label=" Enter Name" />
      <br/>
      <TextField id="email" onChange={(e)=>setstate({...state,email:e.target.value})} label=" Enter Email" />
      <br/>
      <TextField id="password" onChange={(e)=>setstate({...state,password:e.target.value})} label=" Enter Password" />
      <br/>
      <TextField id="role" onChange={(e)=>setstate({...state,role:e.target.value})} label=" Enter Role" />
      <br/>
      <Button type='submit' variant="contained" color="primary">
         Add User
      </Button>

      
    </form>
  );
}