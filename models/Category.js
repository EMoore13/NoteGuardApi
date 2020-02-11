const mongoose = require('mongoose'), Schema = mongoose.Schema;
const Bookmark = require('./Bookmark');

const categorySchema = mongoose.Schema({
    category_name: {
        type: String,
        require: false
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Bookmark'
        }
    ],
});
module.exports = mongoose.model('Category', categorySchema);