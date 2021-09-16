const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')

/*
//old version
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    if (token) {


        jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('/login')
            } else {
                console.log(decodedToken)
                next()
            }
        })
    } else {
        res.redirect('/login')
    }
}
*/
////////////////////////////  PT REACTJS
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt

    const token2 = req.cookies['AccessToken']
    if (token2 === '***Auth token value***') {
        res.json({ csrf: token2 }), next()
    }

    // if (token) {
    //     jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
    //         if (err) {
    //             console.log(err.message)
    //             next()
    //         } else {
    //             console.log(decodedToken, 'AAAA')
    //             // let user = await User.findById(decodedToken)
    //             // res.locals.user = user
    //             next()
    //         }
    //     })
    // } else {
    //     res.locals.user = null
    //     next()
    // }

}
///////////////////////////
const requireAuth = (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) return res.status(401).json({ errorMessage: "Unauthorized" })

        const verified = jwt.verify(token, 'net ninja secret', (err, decodedToken) => { console.log(decodedToken) })
        req.user = verified.user

        next()
    } catch (error) {
        console.log(error)
        res.redirect('/') // tr sa l redirectionezi catre pag de login! 
    }
}


module.exports = {
    requireAuth, checkUser
}
