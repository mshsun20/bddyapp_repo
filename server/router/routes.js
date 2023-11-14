const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../db/dbconfig')
const Dept = require('../model/deptSchema')
const Desig = require('../model/desigSchema')
const Lang = require('../model/langSchema')
const Account = require('../model/accountSchema')
const Contact = require('../model/contactSchema')
const Evt = require('../model/evtSchema')
// Routes----------------------------------------------------------------
router.get('/', (req, res) => {
    res.json({success:`Server is Online...`, statuscode:200})
})

router.route('/contact').post((req, res) => {
    const {deptname, deptinfo} = req.body
    try {
        const dept = new Dept({deptname, deptinfo})
        dept.save().then(() => {
            res.json({success:`Department data stored...`, statuscode:200})
        }).catch(() => {
            res.json({error:`Department data couldn't be stored.!!!`, statuscode:500})
        })
    } catch (error) {
        console.error(error)
    }
})


module.exports = router
