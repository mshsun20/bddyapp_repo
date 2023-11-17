const mongoose = require('mongoose')

const evntSchema = new mongoose.Schema({
    evnttype: {
        type: String,
        required: true,
    },
    evntname: {
        type: String,
    },
    evntdt: {
        type: Date,
        required: true,
    },
    evntdur: {
        type: Number,
        required: true,
        default: 0,
    },
})

const Evnt = mongoose.model('event', evntSchema)

module.exports = Evnt
