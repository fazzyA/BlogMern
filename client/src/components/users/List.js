import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Editable from '../Tables/EditableTable';
import SingleUser from './SingleUser';

function List() {
    const [users, setusers] = useState([]);
    //http://localhost:4000/api/users/
    useEffect(
        ()=>{
            const fetchUsers = async ()=>{
            const myusers = await axios.get('http://localhost:4000/api/users/')
            console.log(" fetchUsers ~ myusers", myusers)
            setusers(myusers.data)
        } 
               fetchUsers();
        },
       []
    )
    console.log(users)
    return (
        <div>
            <Editable users={users}/>
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
