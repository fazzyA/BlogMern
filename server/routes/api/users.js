const express = require('express')
const router  = express.Router()
const User = require('../../model/User.js')
var bcrypt = require('bcryptjs');
///========/api/users
router.get('/',async (req,res)=>{
    // get all users
   const users = await User.find();
    res.json(users)
})
router.get('/:id',async (req,res)=>{
    //get single user
    try {
    let { id } = req.params
    const user = await User.findById(id)
    console.log(user)
    if(!user) {
     res.json({status:400, msg:'user nor exist'})
    }
    res.json({
        status:200,
        data:user
    })
 
    } catch (error) {
        res.json({status:400, msg:'something went wrong'})
    }
})
router.post('/',async (req,res)=>{
    let {name, username, email,password, role} = req.body
    let newUser = {name, username, email,password,role}
    //save user
  var hash = await bcrypt.hash(password, 10);

newUser.password = hash

const checkUser = await User.findOne({email:email})
if(checkUser) return res.json({status:400,msg:'already exists'})
    User.create(newUser)
    .then(user=>{
        res.json({
            status: 200,
            data:user,
            id: user._id

        })
    })
    .catch(err=>res.json({status:400,msg:'something went wrong',error:err}))
})
router.delete('/:id',async (req,res)=>{
    //del user
    console.log('im in delete');
    const { id } = req.params
    const del = await User.findByIdAndDelete(id)
    res.json({
        status: 200,
        msg: 'post is successfully deleted'

    })

})
router.put('/:id',(req,res)=>{
    //update user
})

module.exports=router