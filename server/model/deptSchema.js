const mongoose = require('mongoose')

const deptSchema = new mongoose.Schema({
    deptname: {
        type: String,
        required: true,
    },
    deptinfo: {
        type: String,
    },
})

const Dept = mongoose.model('department', deptSchema)

module.exports = Dept
