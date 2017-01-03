var express = require('express')
var bodyParser = require('body-parser')

var app = express();

app.use(express.static('assets'))
app.use(bodyParser.json());

var messages = [
  //  {messages:'Hey how are you?'},
  //  {messages:'Want to go do something today?'},
  //  {messages:'Merry Christmas ya filthy animal'}
  // {message: 'Hey how are you?', contact: 'Ashley'},
  // {message: 'Want to go do something today?', contact: 'Greg'},
  // {message: 'Merry Christmas ya filthy animal', contact: 'Santa'}
]

app.get('/messages', function(req, res, next){
  res.status(200).json({ messages: messages });
});

app.post('/messages', function(req, res, next){
messages.push({message: req.body.message, time:new Date() });
console.log(req.body);
res.status(200).json({ messages: messages});
});

app.listen(3000);
