const express = require('express')
const router  = express.Router()
const User = require('../../model/User.js')
///========/api/users
router.get('/',async (req,res)=>{
    // get all users
   const users = await User.find();
    res.json(users)
})
router.get('/:id',(req,res)=>{
    //
    console.log('sdasadsa')
})
router.post('/',(req,res)=>{
    console.log(req.body)
    //save user
    User.create(req.body)
    .then(user=>{
        res.json({
            status: 200,
            data:user,
            id: user._id

        })
    })
    .catch(err=>console.log(err))
})
router.delete('/',(req,res)=>{
    //del user
})
router.put('/:id',(req,res)=>{
    //update user
})

module.exports=router