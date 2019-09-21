var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), 
  Task = require('./api/models/factorModel'),
  Task = require('./api/models/productModel'),
  Task=require('./api/models/docModel')//created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route



app.listen(port);

// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// });
// console.log('todo list RESTful API server started on: ' + port);



// const http = require('http');
// const PORT = process.env.PORT || 5000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(PORT, () => {
//   console.log(`Server running on ${PORT}/`);
// });