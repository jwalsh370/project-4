
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

PapiPizza.prototype.calculateFinalPrice = function() {
  finalCost = pizzaSizePrice + toppingPrice;
  return finalCost;
}


//front end
