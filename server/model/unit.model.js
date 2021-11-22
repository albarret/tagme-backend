const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var unitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    assets: [{
        type: Schema.Types.ObjectId,
        ref: 'Asset',
        required: true
    }],
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company' ,
        required: true
    }
});

var Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;