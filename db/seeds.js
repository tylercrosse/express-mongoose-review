var Schema = require('./schema');
var Pizza = Schema.Pizza

// empty out any old data
Pizza.remove({}, function(err){
  console.log(err);
})

// create a new instance of our model
pizza1 = new Pizza({title: "Cheese", size: "L"})

// save it
pizza1.save();
