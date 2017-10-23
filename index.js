const express = require('express')
const http = require('http')

const page = require('./server/page')

const app = express()

const port = 8080

app.use(express.static('template'))

app.get('/',(req,res)=>{
	res.sendFile(page.getPath('home'))
})

app.listen(port, ()=>{
	console.log(`Akakom Material Design berjalan pada http://localhost:${port}/`)
})