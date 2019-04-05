const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
    let posts = Post.find({}).populate('author').select('content');
    posts.exec((err, data) => {
        if(err) {
            //console.log(err);
            return res.status(200).json({error: 'Unable to fetch all posts.'}); 
        }
        return res.status(200).json(data);
    })
}

exports.getPost = (req, res, next) => {
    let post = Post.findById(req.body.id).populate('Author');
    post.exec((err, data) => {
        if(err) {
            return res.status(200).json({error: 'Unable to fetch post.'});
        } 
        return res.status(200).json(data);
        
    })
}

/**
 * Method to save post
 */
exports.savePost = (req, res, next) => {
    let post = new Post({
        content: req.body.content,
        author: req.body.author_id,
        addedOn: Date.now()
    });
    post.save((err, data) => {
        if(err) {
            console.log(err.errors['content'].message);
            return res.status(200).json({error: 'Unable to save post.'});
        }
        return res.status(200).json({message: 'Post saved successfully.'});
    })
}

exports.updatePost = (req, res, next) => {
    let id = (req.params.id) ? req.params.id : '';
    let post = Post.findByIdAndUpdate(id,{
        $set: {
            content: req.body.content,
            updatedOn: Date.now()
        }
    })
    post.exec((err, data) => {
        if(err) {
            return res.status(200).json({error: 'Unable to update post.'});
        }
        return res.status(200).json({message: 'Post updated successfully.'});
        
    })
}

exports.deletePost = (req, res, next) => {
    let id = (req.params.id) ? req.params.id : '';
    Post.findByIdAndDelete(id,(err, data) => {
        if(err) {
            return res.status(200).json({error: 'Unable to delete post.'});
        }
        return res.status(200).json({message: 'Post deleted successfully.'});
    })
}
