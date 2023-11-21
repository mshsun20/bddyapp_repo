const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./router/routes')
require('./db/dbconfig')


const app = express()
dotenv.config({path:'config.env'})

// middlewares
app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionsSuccessStatus: true,
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('uploads'))
app.use('/', routes)

const port = process.env.PORT || 5050
const host = process.env.HOST || 'localhost'

// ping
app.listen(port,host, (req, res) => {
    console.log(`Server is Running on http://${host}:${port}`)
})
