var express = require('express')
var app = express()

const mongoose = require('mongoose');
const User = require('./schemas/user');

let orgDate = new Date()

var PORT = 80

var cors = require('cors')

app.use(cors())

mongoose.connect('YOUR MONGO CONNECTION LINK')
  .then((result) => { console.log('Connected to Mongo!') })
  .catch((error) => { console.log('Error connecting to Mongo:', error) });

function newUser(id) {
  let user = new User({
    Id: id,
    Score: 0,
  })

  user.save()

}


app.get('/', (req,res,next) => {
  res.send(`Server started ${new Date().getTime() - orgDate.getTime()} miliseconds ago. >{Programmed by amukh1}<`)
})

app.get('/exists', (req,res,next) => {
 User.findOne({Id: req.query.id}, (err,obj) => {
   if(!obj){
        newUser(req.query.id)
     res.send(`Made user with id: ${req.query.id}`)
   }else {
       res.send('exists')
   }
 })
})

app.post('/newScore', (req,res,next) => {
   User.findOne({Id: req.query.id}, (err,obj) => {
  obj.Score++
     res.send(`Score of ${req.query.id} is now ${obj.Score}`)
     obj.save()
   })
})

app.get('/getScore', (req,res,next) => {
   User.findOne({Id: req.query.id}, (err,obj) => {
  res.send(obj.Score.toString())
   })
})

app.listen(PORT || 80, () => {
  console.log(`Server started ${new Date().getTime() - orgDate.getTime()} miliseconds ago. >{Programmed by amukh1}<`)
})

// Programmed by amukh1
