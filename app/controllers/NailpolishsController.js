'use strict'
let Controller = require('./Controller')
const NAILPOLISH = require('../models/nailpolish')

class NailpolishsController extends Controller {

    constructor() {
        super(NAILPOLISH)
    }
}

module.exports = NailpolishsController