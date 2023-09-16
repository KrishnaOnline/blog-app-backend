const Post = require('../models/postModel');

exports.createPost = async(req, res) => {
    try {
        const {title, body} = req.body;
        const savedPost = await Post.create({title, body});

        res.json({
            post: savedPost,
        })
    }
    catch(err){
        res.json({
            error: err.message,
        })
    }
}

exports.getAllPosts = async(req, res) => {
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts: posts,
        })
    }
}