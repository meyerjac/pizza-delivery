//Business Logic
function pizza(size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

function address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state
}

pizza.prototype.fullPizzaName = function() {
  return ("you ordered a" + this.pizzaSize + "")
}


//User Interface Logic
$(document).ready(function() {
  $("order").submit(function(event) {
  event.preventDefault();
  var inputtedSize = $("#size").val();
  var inputtedToppings = $("#size").val();

})
})
