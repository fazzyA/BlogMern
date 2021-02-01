import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AddPost() {
  const [state, setstate] = useState({
    description:'',title:'', author:''
  })
  const classes = useStyles();


const handleSubmit =async (e)=>{
  e.preventDefault();
console.log('im in submit');
const res = await axios.post('http://localhost:4000/api/posts/',state)
console.log(res);

  }
console.log(state);
  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField id="title" onChange={(e)=>setstate({...state, title:e.target.value})} 
      label="title" />
      <br/>
      <TextField id="description" onChange={(e)=>setstate({...state,description:e.target.value})} label=" description" />
      <br/>
      <TextField id="author" onChange={(e)=>setstate({...state,author:e.target.value})} label=" author" />
      <br/>
      {/* <TextField id="email" onChange={(e)=>setstate({...state,email:e.target.value})} label=" Enter Email" />
      <br/>
      <TextField id="role" onChange={(e)=>setstate({...state,role:e.target.value})} label=" Enter Role" />
      <br/> */}
      <Button type='submit' variant="contained" color="primary">
         Add User
      </Button>

      
    </form>
  );
}