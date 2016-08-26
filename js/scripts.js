//Business Logic
function pizzaOrder(size, topping, address) {
  this.pizzaSize = size;
  this.pizzaToppings = topping;
  this.pizzaDeliveryAddress = address;
}

pizza.prototype.orderName = function() {
  return this.PizzaSize + " " + this.pizzaToppings
}


var order1 = new PizzaOrder(sizeInput + toppingInput + addressInput1)



$("document").ready(function() {
  $("form").submit(function(event) {
  event.preventdefault();
  var sizeInput=$("#size").val();
  var toppingInput=$("#toppings").val();
  var addressInput1=$("#address1").val();
  var order1 = new PizzaOrder(sizeInput + toppingInput + addressInput1);



})
});
















//
//
// if (input <= 9) {
//   alert("We won't make a pizza under 10 inches, order a real pizza")
// }
// if ((input >=10) && (input <=30)) {
//   return(15)
// }
// if (input >=31) && (input <=40) {
//   return(25)
// }
// if (input >=41)
//   return(35)
}
