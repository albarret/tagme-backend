const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company' ,
        required: true
    }
});

var User = mongoose.model('User', userSchema);

module.exports = User;