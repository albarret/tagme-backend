const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var assetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    health: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Running', 'Alerting', 'Stopped'],
        required: true
    },
    img: {
        data: Buffer,
        contentType: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Owner' ,
        required: true
    },
    unit: {
        type: Schema.Types.ObjectId,
        ref: 'Unit' ,
        required: true
    }
});

var Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;