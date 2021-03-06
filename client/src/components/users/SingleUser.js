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
