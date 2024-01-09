
require('dotenv').config()
const express = require('express')
const app = express() 


app.get('/', (req, res) => {
    res.send("hello world")
})


app.get('/facebook', (req, res) =>
res.send('huxaif')
)


app.get('/login', (req, res) =>
res.send('<h1>login at our website</h1>')
)
app.listen(process.env.PORT ,() => {
    console.log(`backend litsned on port ${process.env.PORT}`)
})
