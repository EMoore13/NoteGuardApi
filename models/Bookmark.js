const mongoose = require('mongoose');

const schema = mongoose.Schema({
    tabName: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Bookmark', schema);