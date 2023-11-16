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
// -----------------------------------------------------------------------

// READ
router.route('/dept').get(async (req, res) => {
    try {
        const dept = await Dept.find()
        res.json({success:`All Departments data fetched...`, data:dept})
    } catch (error) {
        console.error(error)
    }
})
router.route('/desig').get(async (req, res) => {
    try {
        const desig = await Desig.find()
        res.json({success:`All Designations data fetched...`, data:desig})
    } catch (error) {
        console.error(error)
    }
})
router.route('/lang').get(async (req, res) => {
    try {
        const lang = await Lang.find()
        res.json({success:`All Language details fetched...`, data:lang})
    } catch (error) {
        console.error(error)
    }
})

// CREATE
router.route('/contact').post((req, res) => {
    const {deptname, deptinfo} = req.body
    try {
        const contact = new Contact({deptname, deptinfo})
        contact.save().then(() => {
            res.json({success:`Department data stored...`, statuscode:200})
        }).catch(() => {
            res.json({error:`Department data couldn't be stored.!!!`, statuscode:500})
        })
    } catch (error) {
        console.error(error)
    }
})
router.route('/dept').post((req, res) => {
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
router.route('/desig').post((req, res) => {
    const {designame, desiglvl, desiginfo} = req.body
    try {
        const desig = new Desig({designame, desiglvl, desiginfo})
        desig.save().then(() => {
            res.json({success:`Designation data stored...`, statuscode:200})
        }).catch(() => {
            res.json({error:`Designation data couldn't be stored.!!!`, statuscode:500})
        })
    } catch (error) {
        console.error(error)
    }
})
router.route('/lang').post((req, res) => {
    const {langname, langdet} = req.body
    try {
        const lang = new Lang({langname, langdet})
        lang.save().then(() => {
            res.json({success:`Language details stored...`, statuscode:200})
        }).catch(() => {
            res.json({error:`Language details couldn't be stored.!!!`, statuscode:500})
        })
    } catch (error) {
        console.error(error)
    }
})

// UPDATE

// DELETE


module.exports = router
