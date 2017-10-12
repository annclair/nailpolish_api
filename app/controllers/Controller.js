'use strict'

class Controller {

    constructor(model) {
        this.model = model
    }

    find(req, res, next) {
        this.model.find(req.query, (err, documents) => {
            res.json(documents)
        })
    }

    findById(req, res, next) {
        this.model.findById(req.params.id, (err, document) => {
            if (err)
                next(err)
            else
                res.json(document)
        })
    }

    create(req, res, next) {
        this.model.create(req.body, (err, document) => {
            if (err) {
                next(err)
            } else {
                res.json(document)
            }
        })
    }

}

module.exports = Controller