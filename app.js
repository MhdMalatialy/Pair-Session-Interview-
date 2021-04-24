const express = require('express')
const app = express() 
const bodyParser =  require('body-parser')  
require('dotenv').config()
const helloRoute = require('./routes/hello')
const PORT = process.env.PORT
// const http = require('http');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helloRoute)
// const server = http.createServer(app);

app.listen((PORT), ()=> {
    console.log(`express server is up on port${PORT}`)
})
module.exports = app;

