const express = require('express')
const http = require('http')

const page = require('./server/page')

const app = express()

const port = 8080

app.use(express.static('template'))

app.get('/',(req,res)=>{
	res.sendFile(page.getPath('home'))
})

app.get('/berita',(req,res)=>{
	res.sendFile(page.getPath('berita'))
})

app.get('/info',(req,res)=>{
	res.sendFile(page.getPath('info'))
})

app.get('/sejarah',(req,res)=>{
	res.sendFile(page.getPath('sejarah'))
})

app.get('/tautan',(req,res)=>{
	res.sendFile(page.getPath('tautan'))
})

app.get('*',(req,res)=>{
	res.redirect('/')
})


app.listen(port, ()=>{
	console.log(`Akakom Material Design berjalan pada http://localhost:${port}/`)
})