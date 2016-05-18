// import mongoose from node_modules so we can use it here
var mongoose = require('mongoose');
// connect to local mongod database
mongoose.connect('mongodb://localhost/pizza');

// create a schema http://stackoverflow.com/q/22596806/5472034
var PizzaSchema = mongoose.Schema({
  title: String,
  size: String,
  toppings: Array
})

// define a new model
  // - first arg is name of the model, second arg is a schema
var PizzaModel = mongoose.model("Pizza", PizzaSchema);

// export our model so we can use it elsewhere
module.exports = {
  Pizza: PizzaModel
}
