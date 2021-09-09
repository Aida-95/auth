const express = require('express')

const secretRouter = express.Router()
secretRouter.get('/boom', (req, res) => {
    res.send('<h1>Secret page</h1>')
})

module.exports = { secretRouter }