#!/usr/bin/env node

const express = require('express')
const app = express()
const port = 22310
const fs = require('fs')

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})

app.use(express.static(`${__dirname}`))

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/list_physics', (req, res) => {
  fs.readFile('./physics.json', (err, data) => {
    var object = JSON.parse(data)
    if (err) throw err
    else res.send(Object.keys(object))
  })
})

app.post('/list_calculus', (req, res) => {
  fs.readFile('./calculus.json', (err, data) => {
    var object = JSON.parse(data)
    if (err) throw err
    else res.send(Object.keys(object))
  })
})

app.post('/list_linear', (req, res) => {
  fs.readFile('./linear.json', (err, data) => {
    var object = JSON.parse(data)
    if (err) throw err
    else res.send(Object.keys(object))
  })
})

app.post('/list_electronics', (req, res) => {
  fs.readFile('./electronics.json', (err, data) => {
    var object = JSON.parse(data)
    if (err) throw err
    else res.send(Object.keys(object))
  })
})

app.post('/list_electromagnetics', (req, res) => {
  fs.readFile('./electromagnetics.json', (err, data) => {
    var object = JSON.parse(data)
    if (err) throw err
    else res.send(Object.keys(object))
  })
})

app.post('/add_physics', (req, res) => {
  fs.readFile('./physics.json', (err, data) => {
    var jsonObj = JSON.parse(data)
    var newStudent = {}
    newStudent[req.body.mark] = req.body.detail
    obj = Object.assign(newStudent, jsonObj)
    json = JSON.stringify(obj)
    fs.writeFile('./physics.json', json, (err) => {
    })
  })
})

app.post('/add_calculus', (req, res) => {
  fs.readFile('./calculus.json', (err, data) => {
    var jsonObj = JSON.parse(data)
    var newStudent = {}
    newStudent[req.body.mark] = req.body.detail
    obj = Object.assign(newStudent, jsonObj)
    json = JSON.stringify(obj)
    fs.writeFile('./calculus.json', json, (err) => {
    })
  })
})

app.post('/add_linear', (req, res) => {
  fs.readFile('./linear.json', (err, data) => {
    var jsonObj = JSON.parse(data)
    var newStudent = {}
    newStudent[req.body.mark] = req.body.detail
    obj = Object.assign(newStudent, jsonObj)
    json = JSON.stringify(obj)
    fs.writeFile('./linear.json', json, (err) => {
    })
  })
})

app.post('/add_electronics', (req, res) => {
  fs.readFile('./electronics.json', (err, data) => {
    var jsonObj = JSON.parse(data)
    var newStudent = {}
    newStudent[req.body.mark] = req.body.detail
    obj = Object.assign(newStudent, jsonObj)
    json = JSON.stringify(obj)
    fs.writeFile('./electronics.json', json, (err) => {
    })
  })
})

app.post('/add_electromagnetics', (req, res) => {
  fs.readFile('./electromagnetics.json', (err, data) => {
    var jsonObj = JSON.parse(data)
    var newStudent = {}
    newStudent[req.body.mark] = req.body.detail
    obj = Object.assign(newStudent, jsonObj)
    json = JSON.stringify(obj)
    fs.writeFile('./electromagnetics.json', json, (err) => {
    })
  })
})

app.post('/search_physics', (req, res) => {
  fs.readFile(`./physics.json`, (err, data)=>{
    if (err) throw err
    else res.send(`${JSON.parse(data)[req.body.mark]}`)
  })
})

app.post('/search_calculus', (req, res) => {
  fs.readFile(`./calculus.json`, (err, data)=>{
    if (err) throw err
    else res.send(`${JSON.parse(data)[req.body.mark]}`)
  })
})

app.post('/search_linear', (req, res) => {
  fs.readFile(`./linear.json`, (err, data)=>{
    if (err) throw err
    else res.send(`${JSON.parse(data)[req.body.mark]}`)
  })
})

app.post('/search_electronics', (req, res) => {
  fs.readFile(`./electronics.json`, (err, data)=>{
    if (err) throw err
    else res.send(`${JSON.parse(data)[req.body.mark]}`)
  })
})

app.post('/search_electromagnetics', (req, res) => {
  fs.readFile(`./electromagnetics.json`, (err, data)=>{
    if (err) throw err
    else res.send(`${JSON.parse(data)[req.body.mark]}`)
  })
})

