const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');


let PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(helmet());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// Default error checking middleware.
app.use((err, req, res, next) => {
    if(err) {
        console.log(err);
        return res.status(400).json({'error': 'Something went wrong. Please try again.'})
    }
    next();
});

const postsRoute = require('./routes/post_routes');
const authorsRoute = require('./routes/author_routes');

app.use('/post', postsRoute);
app.use('/author', authorsRoute);

mongoose.connect('mongodb+srv://root:4DConnect@cluster0-sks0s.mongodb.net/blog?retryWrites=true',{ useNewUrlParser: true}).then(
    (res) => {
        app.listen(PORT, console.log('App is running on port: ' + PORT));
    }
);

let db = mongoose.connection;
db.on('error',() => {
    console.log('MongoDB connection error.')
});


