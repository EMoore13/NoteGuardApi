const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Category = require('./Category');

const bookmarkSchema = mongoose.Schema({
    tabName: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    category: { 
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);