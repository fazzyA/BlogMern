const express = require('express')
const router  = express.Router()
const Post = require('../../model/Post.js')

//@route Get all posts
//
router.get('/',async (req,res)=>{
    const posts = await Post.find();
    console.log(posts)
    res.json({
        status: 200,
        posts
    })

})
//@route Get single post

router.get('/:id',async (req,res)=>{
    const {id} = req.params

    const post = await Post.findById(id);
    console.log(post)
    res.json({
        status: 200,
        post
    })

})
//@route add new post

router.post('/',async (req,res)=>{
   // const {title, description, author} = req.body
    try {
 const newPost = await Post.create(req.body)
   console.log(newPost)
   res.json({
       status: 201,
       pid: newPost._id
   })

    } catch (error) {
        res.json({
            status:400,
            msg: 'Post is not created'
        })
    }
})

router.put('/',async (req,res)=>{
    const {title, description} = req.body
    try {
 const newPost = await Post.findByIdAndUpdate(req.body)
   console.log(newPost)
   res.json({
       status: 201,
       pid: newPost._id,
       msg: "post updated"
   })

    } catch (error) {
        res.json({
            status:400,
            msg: 'somethong went wrong'
        })
    }
})


router.delete('/:id', async (req,res)=>{
    const { id } = req.params
    const del = await Post.findByIdAndDelete(id)
    res.json({
        status: 200,
        msg: 'post is successfully deleted'

    })
})
module.exports=router