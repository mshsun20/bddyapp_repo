const mongoose = require('mongoose')

const evtSchema = new mongoose.Schema({
    evttype: {
        type: String,
    },
    evtname: {
        type: String,
        required: true,
    },
    evtdt: {
        type: String,
    },
    evtdur: {
        type: Number,
    },
})

const Evt = mongoose.model('event', evtSchema)

module.exports = Evt
