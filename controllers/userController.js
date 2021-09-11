const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')

//Error

//handle error
const handleErrors = (err) => {  //see what kind of object error is /return error object as an json object 
    console.log(err.message, err.code)  // error.code will bw undefined most of the time

    let errors = { email: '', password: '' } // send json back to the user ///populate error if there is one!

    //incorect email
    if (err.message === 'incorrect email') {
        errors.email = 'that email is not registered'
    }

    //incorect password
    if (err.message === 'incorrect password') {
        errors.password = 'that password is incorrect'
    }

    //duplicate error code
    if (err.code === 11000) {
        errors.email = 'That email is already registred!'
        return errors
    }

    //validation  errors
    if (err.message.includes('user validation failed')) {
        //console.log(err.errors)
        //we whant only the value of the object error !
        //console.log(Object.values(err.errors)) //return an array
        Object.values(err.errors).forEach(({ properties }) => {
            //console.log(properties)
            //update the above error object email and password
            errors[properties.path] = properties.message

        })
    }
    return errors
}

const maxAge = 3 * 24 * 60 * 60 //3 days in seconds 
// Put the id in the payload jwt// the id is comming from the user(when you create user)
const createToken = (id) => {
    return jwt.sign({ id }, 'net ninja secret', {
        expiresIn: maxAge
    })
}


// Register
const register = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const user = await User.create({ username, email, password })
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.status(201).json({ user: user._id })
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

// login
const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
        res.cookie('AccessToken', '***Auth token value***', { httpOnly: true, expires: 0 });
        res.status(200).json({ user: user._id })
    } catch (error) {
        const errors = handleErrors(error)
        res.status(400).json({ errors })
    }
}


const logout = (req, res) => {
    res.cookie('jwt', "", { expires: new Date(0) }).send()
    // res.redirect('/test')
}

const loggedIn = (req, res) => {
    try {
        const token = req.cookies.jwt
        if (!token) return res.json(false)
        const verified = jwt.verify(token, 'net ninja secret', (err, decodedToken) => { console.log(decodedToken) })
        res.send(true)
    } catch (error) {
        res.json(false)
    }
}
module.exports = {
    register,
    login,
    logout,
    loggedIn
}