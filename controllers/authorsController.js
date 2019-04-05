const Author = require('../models/author');

exports.getAllAuthors = (req, res, next) => {
    let authorObj = new Author();
    authorObj.myFunc();
    Author.myStaticMethod();
    let authors = Author.find({}).populate('posts');
    authors.exec((err, data) => {
        if(err) {
            return res.status(200).json({error: 'Unable to fetch all authors.'});
        }
        return res.status(200).json(data);
    })
}

exports.getAuthor = (req, res, next) => {
    let id = (req.params.id) ? req.params.id : ''; 
    let author = Author.findById(id).populate('posts');
    author.exec((err, data) => {
        if(err) {
            return res.status(200).json({error: 'Unable to find author.'});
        }
        return res.status(200).json(data);
    })
}

exports.addAuthor = (req, res, next) => {
    
    let author = new Author({
        name: req.body.name,
        email: req.body.email,
        posts: req.body.posts
    });
    author.save((err, data) => {
        if(err) {
            return res.status(200).json({error: 'Unable to save author details.'});
        }
        return res.status(200).json(data);
    });
    
}

exports.updateAuthor = (req, res, next) => {
    let id = (req.params.id) ? req.params.id : '';
}

exports.deleteAuthor = (req, res, next) => {
    let id = (req.params.id) ? req.params.id : '';
}
