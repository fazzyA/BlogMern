import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Editable from '../Tables/EditableTable';

function PostList() {
    const [posts, setposts] = useState([]);
    const [col, setcol] = useState([
        { title: 'title', field: 'title' },
        { title: 'description', field: 'description', initialEditValue: '' },
        { title: 'author', field: 'author' },
      ])

    useEffect(
        ()=>{
            axios.get('http://localhost:4000/api/posts/')
            .then(res=>{
                console.log(res);
                setposts(res.data.posts)
            })
            .catch(err=>console.log(err))

        }, []
    )
    console.log(posts)
    return (
        <div>
            <Editable row={posts} col={col} />
           
            {/* {
                posts.map((item)=>(
                    <>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <div>{item.phno}</div>
                    </>
                ))
            } */}
        </div>
    )
}

export default PostList
