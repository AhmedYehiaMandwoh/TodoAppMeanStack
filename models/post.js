const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },
});

const Post = module.exports = mongoose.model('Post', PostSchema);
