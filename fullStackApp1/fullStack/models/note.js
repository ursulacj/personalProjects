var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema ({
    name: {
        type: String,
        enum: []
    }
})

var moodSchema = new Schema ({
    mood: {
        type: String,
        enum: []
    }
})

var noteSchema = new Schema ({
    title: {
        type: String,
        default: Date(),
    },
    content: {
        type: String
    },
    mood: [moodSchema],
    tags: [tagSchema],
    public: {
        type: Boolean
    }
    },{timestamps: true
})

module.exports = mongoose.model('Note', noteSchema);