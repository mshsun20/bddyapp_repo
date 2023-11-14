const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    contname: {
        type: String,
        required: true,
    },
    contphn: {
        type: String,
        required: true,
    },
    contwhtsp: {
        type: String,
        required: true,
    },
    conteml: {
        type: String,
        required: true,
    },
    contpass: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    dept_id: {
        type: String,
        required: true,
    },
    desig_id: {
        type: String,
        required: true,
    },
    empcode: {
        type: String,
        required: true,
    },
    lang_id: {
        type: String,
        required: true,
    },
})

const Contact = mongoose.model('contact', contactSchema)

module.exports = Contact
