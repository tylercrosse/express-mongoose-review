var express = require('express');
var hbs     = require('express-handlebars');
var app     = express();

var schema  = require('./db/schema');
var Pizza   = schema.Pizza

// configure express to use '.hbs' as the extension for views
app.engine('.hbs', hbs({
  extname: '.hbs',
  defaultLayout: 'main' // configure 'main.hbs to be the defualt layout'
  // by default express looks for ./views/layouts
  // There's a ton more config options in the docs: https://github.com/ericf/express-handlebars#configuration-and-defaults
}));
app.set('view engine', '.hbs');

// do stuff when someone requests '/'
app.get('/', function(req, res){
  // ask query the pizza collection from mongod
  Pizza.find({})
    // then do something with what mongod gives back
    .then(function(pizzas){
      // respond with the pizza template with what mongod returned (pizzas)
      res.render('pizza', {pizzas: pizzas})
    })
})

// listen for requests on port 4321
var port = 4321
app.listen(port, function(){
  console.log("listening on "+ port);
})
