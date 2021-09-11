const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const csrf = require('csurf')
const cors = require('cors')
const heltmet = require('helmet')
const router = require('./routes/userRouter')
///
const { secretRouter } = require('./routes/secretPage')
const { requireAuth, checkUser } = require('./middleware/authjwt')

dotenv.config()
const PORT = process.env.PORT || 5000

//CSRF
const csrfProtection = csrf({ cookie: true })

const app = express()

app.use(heltmet())
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
        origin: [
            "http://localhost:3000"
        ],
        credentials: true,
    })
);

//database conn
const urldb = process.env.DATABASE_CONNECTION
mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true, })
    .then((result) => app.listen(PORT, () => { console.log('Database conn ok') }))
    .catch((err) => console.log(err))



//routes

// app.get('*', checkUser)


app.get('/', csrfProtection, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.json({})
    console.log(res.cookie)
    res.send("<h1>HELOOO</h1>")
})

app.use('/test/secret', requireAuth, secretRouter)
app.use('/test', router)