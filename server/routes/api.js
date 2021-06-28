const express = require('express');

const router = express.Router();

const Post = require('../models/Post');

// /api/upload
router.post('/upload',  (req,res)=>{
    const body = req.body;

   
        Post.create(body, (err,data)=>{
            if(err){
                res.json(500).send(err)
            }else{
                res.json(201).send(data)
            }
        })
    
    
});

router.get('/sync', (req,res)=>{

    Post.find((err,data)=>{
        if(err){
            res.json(500).send(err)
        }else{
            res.json(200).send(data)
        }
    })
    
});

module.exports = router