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

function SinglePost() {
    const [post, setpost] = useState({})
    let {id} = useParams();
useEffect(()=>{
// get single user
const getPost = async ()=>{
    const res = await axios.get(`http://localhost:4000/api/posts/${id}`)
    console.log(res.data.post);
    setpost(res.data.post)
}
getPost()

},[])
console.log(id);
    return (
        <div style={{width:'500', margin:'auto'}}>
           <Paper elevation={3}>
           <div>title={post.title}</div>
           <div>desc={post.description}</div>
           <div>desc={post.author}</div>
           <div><img src={post.image} alt='' height='100' width='100'/></div>
           </Paper>
        </div>
    )
}

export default SinglePost
