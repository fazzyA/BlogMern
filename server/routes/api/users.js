const express = require('express')
const router  = express.Router()
const users = require('../../User.js')
/// =========all
///========/api/users
router.get('/',(req,res)=>{
    // get all users
    res.json(users)
})
router.get('/:id',(req,res)=>{
    //get single user of id
    //req.body req.params.id
    let {id} =req.params;
    const singleUsr = users.filter(item=>item.id==id)
    res.json(singleUsr)
})
router.post('/',(req,res)=>{
    //save user
})
router.delete('/',(req,res)=>{
    //del user
})
router.put('/:id',(req,res)=>{
    //update user
})

module.exports=router