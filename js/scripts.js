function Pizza(size, toppings) {
  this.size = [];
  this.toppings = [];
}

function PizzaOrder(pizzaType, pizzaAmount) {
  this.pizzaType = pizzaType;
  this.pizzaAmount = pizzaAmount;
}

var pizzaSize = { size: ["small", "medium", "large"]}
var pizzaToppings = { toppings: ["pepperoni", "sausage", "Fresh Mozerella", "kale", "roasted onions", "roasted potatos", "hot peppers"]}
