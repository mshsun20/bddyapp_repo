const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    accname: {
        type: String,
        required: true,
    },
    accphn: {
        type: String,
        required: true,
    },
    accwhtsp: {
        type: String,
        required: true,
    },
    acceml: {
        type: String,
        required: true,
    },
    accpass: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    deptid: {
        type: String,
        required: true,
    },
    desigid: {
        type: String,
        required: true,
    },
    empcode: {
        type: String,
        required: true,
    },
})

const Account = mongoose.model('account', accountSchema)

module.exports = Account
