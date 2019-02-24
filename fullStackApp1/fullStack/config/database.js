var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/index',
    {useNewUrlParser: true}
);

var db = mongoose.connection;

db.on('connected', function() {
    console.log(`connected to MongoDB at ${db.host}:${db.port}`);
});

module.exports = mongoose;