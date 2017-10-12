'use strict'
let NailpolishsController = require('../controllers/NailpolishsController')

module.exports = (app) => {

    let ctrl = new NailpolishsController()

    app.get('/nailpolishs', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    app.get('/nailpolishs/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    app.post('/nailpolishs', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    app.put('/nailpolishs/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    })

    app.delete('/nailpolishs/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })
}