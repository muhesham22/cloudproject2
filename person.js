const express =require('express');
const bodyParser=require('body-parser');
const app = express()
app.use(bodyParser.json())
app.use(express.static("webpage"));

let persons = [
    { id: 35513,
       name: 'muhammed',
       age: 9,
       gender: 'male',
       email: 'mm296@example.com' },
       { id: 26165,
        name: 'Ali',
        age: 23,
        gender: 'male',
        email: 'aliali@example.com' },
        
  
  ]
  
  app.get('/persons', (req, res) => {
    res.json(persons)
  })
  
  app.post('/persons', (req, res) => {
    const person = req.body
    person.id = persons.length + 1
    persons.push(person)
    res.json(person)
  })
  
  
  app.get('/persons/:id', (req, res) => {

    const id = parseInt(req.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
      res.json(person)
    } else {
      res.status(404).send('Person not found')
    }

  })
  
  app.put('/persons/:id', (req, res) => {

    const id = parseInt(req.params.id)
    const personIndex = persons.findIndex(p => p.id === id)
    if (personIndex !== -1) {
      const person = req.body
      person.id = id
      persons[personIndex] = person
      res.json(person)
    } else {
      res.status(404).send('Person not found')
    }
  })
  
  app.delete('/persons/:id', (req, res) => {

    const id = parseInt(req.params.id)
    const personIndex = persons.findIndex(p => p.id === id)
    if (personIndex !== -1) {
      persons.splice(personIndex, 1)
      res.sendStatus(204)
    } else {
      res.status(404).send('Person not found')
    }
  })
  app.listen(8000, () => {

    console.log('Server running on port 8000')
    
  })
