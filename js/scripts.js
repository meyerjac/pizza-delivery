//Business Logic
function pizzaOrder(size, topping) {
  this.pizzaSize = size;
  this.pizzaTopping = topping;
}

function deliveryAddress(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

pizzaOrder.prototype.orderName = function() {
  return this.pizzaSize + " " + this.pizzaTopping;
};

deliveryAddress.prototype.WhereAreWeTakingThisPizzaThisTime = function() {
  return this.street + "Is nearby! I'll be there shortly!";
};



// UI Logic
$(document).ready(function() {
  $("form").submit(function(event) {
  event.preventDefault();
  var sizeInput=$("#size").val();
  var toppingInput1=$("#topping1").val();
  var addressInput1=$("#address1").val();

  var newOrder = new pizzaOrder(sizeInput, toppingInput1);
  var changeToNumber = parseInt(sizeInput)
  var changeToppingToAPrice = parseInt(toppingInput1);
  var finalPrice = parseInt(toppingInput1) + parseInt(sizeInput);

  // if (changeToNumber < 10) alert("please enter a larger pizza, we make big pizzas!") if ((totalSizePrice >= 11) && (totalSizePrice <= 30))  return 25. if ((totalSizePrice >= 31) && (totalSizePrice <= 50))  return 55. if ((totalSizePrice >) return 100
  // }
  //
  // if (changeToppingToAPrice === 1) {return 2} if (changeToppingToAPrice === 2) {return 4 }if (changeToppingToAPrice === 3){ return 6 }if (changeToppingToAPrice === 1){ return 8} if (changeToppingToAPrice === 5){ return 10};


  console.log(finalPrice);

  $(".price").text(finalPrice);

  // $(".last-name").text(newContact.lastName);


  // var newAddress = new deliveryAddress(street, city, state);
  //   console.log(newAddress);

  // $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  //
  //   $(".contact").last().click(function() {
  //     $("#show-contact").show();
  //     $("#show-contact h2").text(newContact.firstName);
  //     $(".first-name").text(newContact.firstName);
  //     $(".last-name").text(newContact.lastName);
  //   });
  //
  //   $("input#new-first-name").val("");
  //   $("input#new-last-name").val("");
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
