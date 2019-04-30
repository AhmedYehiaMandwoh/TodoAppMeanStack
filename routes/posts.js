const express = require('express');
const router = express.Router();
const config = require('../config/database')
const jwt = require('jsonwebtoken');
const Post = require('../models/post');
const passport = require('passport')
// Fetch all Posts
router.get('/post', (req, res, next) => {
    Post.find((err, posts) => {
        if(err) {
            console.log(err)
        } else {
            res.json(posts)
        }
    })
});
// Fetch Posts By ID
router.get('/post/:id', (req, res, next) => {
    Post.findById(req.params.id ,(err, post) => {
        if(err) {
            console.log(err)
        } else {
            res.json(post)
        }
    })
});

// Add New Post 
router.post('/add',  (req, res, next) => {
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description
    });
    newPost.save(newPost,(err, post) => {
        if(err) {
            res.json({success: false, msg: 'Failed To Register'})
        } else {
            res.json({success: true, msg: 'Registered Successfully'})

        }
    })
   
});

// Delete Post
router.get('/delete/:id', (req, res, next) => {
    Post.findOneAndDelete({_id:req.params.id}, (err, post) => {
        console.log(req.params.id)
        if(err) {
            console.log(err)
        } else {
            res.json('Removed Successfully')
        }
       
    })
})
module.exports = router;