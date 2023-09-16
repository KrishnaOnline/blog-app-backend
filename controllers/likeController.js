const Post = require('../models/postModel');
const Like = require('../models/likeModel');

exports.likePost = async(req, res) => {
    try {
        const {post, user} = req.body;
        const savedLike = await Like.create({post, user});

        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new: true})
                                .populate("likes").exec();

        res.json({
            post: updatedPost,
        })
    }
    catch(err) {
        res.json({
            error: err.message,
        })
    }
}

exports.unlikePost = async(req, res) => {
    try {
        const {post, like} = req.body;
        
    }
}