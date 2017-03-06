
// back end
var finalCost = 0;
var toppingPrice = 0;
var pizzaSizePrice = 0;

function PapiPizza(pizzaSize) {
        this.pizzaToppings = [];
        this.pizzaSize = 0;

  }

PapiPizza.prototype.calculateSize = function() {
  if (this.pizzaSize === "small") {
    pizzaSizePrice = 8;
  } else if (this.pizzaSize === "large") {
    pizzaSizePrice = 16;

  }

  return PizzaSizePrice;
}

PapiPizza.prototype.calculateTopping = function() {
  toppingPrice = this.pizzaToppings.length * 1;
  return toppingPrice;
}

PapiPizza.prototype.calculatefinalPrice = function() {
  finalCost = pizzaSizePrice + toppingPrice;
  return finalCost;
}
//front end


  $("form#papiOrder").submit(function(event) {
   event.preventDefault();
   debugger;
   var pizzaSize = $("input:radio[name=size]:checked").val();

   var pizzaToppings = $("input:checkbox[name=pizzaTops]:checked").map(function() {
     return $(this).val();
   }).get();
   pizza = new PapiPizza (pizzaSize, pizzaToppings);
    pizaSize= PapiPizza.prototype.calculateSize();
   pizzaTops = Pizza.prototype.calculateTopping();
   finalPizza = Pizza.prototype.calculatefinalPrice();
   $("#basePrice").html(priceOne);
   $("#toppingPrice").html(priceTwo);
   $("#finalPrice").html(priceThree);

 });
