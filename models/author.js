const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }]
});

authorSchema.methods.myFunc = () => {
    console.log('This is a custom method from author model');
}

authorSchema.statics.myStaticMethod = () => {
    console.log('This is a static method from author schema.');
}
module.exports = mongoose.model('Author', authorSchema);
