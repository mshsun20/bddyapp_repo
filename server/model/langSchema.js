const mongoose = require('mongoose')

const langSchema = new mongoose.Schema({
    langname: {
        type: String,
        required: true,
    },
    langdet: {
        type: String,
    },
})

const Lang = mongoose.model('language', langSchema)

module.exports = Lang
