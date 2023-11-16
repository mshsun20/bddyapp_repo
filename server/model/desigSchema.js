const mongoose = require('mongoose')

const desigSchema = new mongoose.Schema({
    designame: {
        type: String,
        required: true,
    },
    desiglvl: {
        type: String,
    },
    desiginfo: {
        type: String,
    },
})

const Desig = mongoose.model('designation', desigSchema)

module.exports = Desig
