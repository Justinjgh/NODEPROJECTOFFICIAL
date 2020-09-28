const express = require('express')
const app = express()
const port = 3002
const bodyParser = require('body-parser');
const path = require('path');
const registrations = require('./controllers/registrationController');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())

app.use(express.static('public'))


// This route is listening for incoming GET requests - works with componentDidMount. It sends back the registrations array to the browser.

app.get('/registrations', (req, res) => {
  res.send(registrations)
})


app.post('/registrations', (req, res) => {
  // can also do variable = req.body
  registrations.push(req.body)
  res.send('Item posted!')
})

app.put('/registrations/:index', (req, res) => {
  console.log(`the body is: ${JSON.stringify(req.body)} and the params are: ${JSON.stringify(req.params)}`)
  registrations.splice(req.params.index, 1, req.body)
  res.send('Item edited!')
})

app.delete('/registrations/:index', (req, res) => {
 // can also just be (req.params.index, 1)
  let number = req.params.index
  registrations.splice(number, 1);
  res.send(registrations);
})



app.listen(3002, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

