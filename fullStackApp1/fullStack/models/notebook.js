var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var notebookSchema = new Schema ({
    name: {
        type: String,
        default: Date(),
        required: true
    }
})

module.exports = mongoose.model('Notebook', notebookSchema);