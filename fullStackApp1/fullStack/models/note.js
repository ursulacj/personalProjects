var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var noteSchema = new Schema ({
    title: {
        type: String,
        default: Date(),
    },
    content: {
        type: String,
        // required: true
    },
    mood: {
        type: String
    },
    tags: {
        type: String
    },
    public: {
        type: Boolean
    }
    },{timestamps: true
})

module.exports = mongoose.model('Note', noteSchema);