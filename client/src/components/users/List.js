import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Editable from '../Tables/EditableTable';
import AddUser from './Add';

function List() {
    const [users, setusers] = useState([]);
    const [col, setcol] = useState([
        { title: 'Name', field: 'name' },
        { title: 'UserName', field: 'usrname', initialEditValue: '' },
        { title: 'Email', field: 'email' },
        { title: 'Phone#', field: 'phno'},
      ])
    //http://localhost:4000/api/users/
    // useEffect(
    //     ()=>{
    //         const fetchUsers = async ()=>{
    //         const myusers = await axios.get('http://localhost:4000/api/users/')
    //         console.log(" fetchUsers ~ myusers", myusers)
    //         setusers(myusers.data)
    //     } 
    //            fetchUsers();
    //     },
    //    []
    // )
    useEffect(
        ()=>{
            axios.get('http://localhost:4000/api/users/')
            .then(res=>{
                setusers(res.data)
            })
            .catch(err=>console.log(err))

        }, []
    )
    console.log(users)
    return (
        <div>
            <Editable row={users} col={col} />
           
            {/* {
                users.map((item)=>(
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

export default List
