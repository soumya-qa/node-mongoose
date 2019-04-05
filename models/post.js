const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    addedOn: {
        type: Date,
        default: Date.now
    },
    updatedOn: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('Post', postSchema);