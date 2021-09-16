const express = require('express')
const controller = require('../controllers/userController')


const router = express.Router()

router.post('/register', controller.register)
router.post('/login', controller.login)
router.get('/logout', controller.logout)

//LoggedIn
router.get('/loggedIn', controller.loggedIn)



module.exports = router