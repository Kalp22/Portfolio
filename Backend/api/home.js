const express = require('express')
const router = express.Router()

require('dotenv').config()

const aboutSchema = require('./aboutSchema')
const subTitleSchema = require('./subTitleSchema')

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_ADD_HOMEPAGE)

router.get('/', async (req,res) => {
    try {
        const tags = await subTitleSchema.find()
        const aboutParas = await aboutSchema.find()

        res.status(200).json({status: true, aboutParas, tags})

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

module.exports = router