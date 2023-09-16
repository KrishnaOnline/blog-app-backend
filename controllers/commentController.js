const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

exports.createComment = async(req, res) => {
    try {
        const {post, user, body} = req.body;
        const savedComment = await Comment.create({post, user, body});

        const savedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
                            .populate("comments").exec();

        res.json({
            post: savedPost,
        })
    }
    catch(err) {
        res.json({
            error: err.message,
        })
    }
}