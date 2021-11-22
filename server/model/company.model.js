const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

var Company = mongoose.model('Company', companySchema);

module.exports = Company;