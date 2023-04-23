const express = require('express')
const app = express()
const PORT = process.env.PORT || 3300
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
//assets
app.use(express.static('public'))


app.get('/', (req, res) =>{
    res.render('home')
})

//set Templates
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine','ejs')

app.listen(PORT , () =>{
    console.log(`Listening to port ${PORT}`)
})