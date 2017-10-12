'use strict'

let mongoose = require('mongoose')

let nailpolishModel = mongoose.model('Nailpolish', new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    color: {
        type: String
    },
    brand: {
        type: String
    },
    category: {
        type: String
    },
}, {
        timestamps: true
    }))

module.exports = nailpolishModel