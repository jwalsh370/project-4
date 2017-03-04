
// back end

class PapiPizza{
  constructor(pizzaSize, pizzaAmount) {
        this.pizzaToppings = [];
        this.pizzaSize = pizzaSize;
        this.pizzaAmount = PizzaAmount;
  }

  returnPizzaSize() {
    return this.pizzaSize;
  }

  returnPizzaQuantity() {
    return this.pizzaAmount;
  }

  returnpizzaToppings() {
    return this.pizzaToppings;
  }




Pizza.prototype.calculatePizzaSizePrice = function(pizzaAmount) {
  var Cost = 0;

  if (this.size === "small") {
    finalCost = 8;
  } else if (this.size === "large") {
    finalCost = 16;

  }

  return finalCost * pizzaAmount;
}

Pizza.prototype.calculatePizzaToppingPrice = function() {
  var finalCost = 0;
  finalCost = this.pizzaToppings.length * 1;
  return finalCost;
}

//front end

$(function() {

  var toppingsList = ["pick1", "pick2", "pick3", "pick4", "pick5", "pick6", "pick7", "pick8"];

  var pizzaTop = [];
  var finalCost = 0;
  var pizzaAmount = 0;
  var pizzaSize = "";

  $("#pizzaPrice").click(function() {

    pizzaTop = [];


    toppingsList.forEach(function(slice) {
      var checkedBox = ("#" + slice).toString();
      var value = $(checkedBox).val();
      var clicked = $(checkedBox).is(':checked');
      if (clicked === true) {
        pizzaTop.push(value);
      }
    });

    pizzaAmount = $("#quantityForm input[type='radio']:checked").val();

    pizzaSize = $("#pizzaPizza input[type='radio']:checked").val();



    var newPapiPizza= new Pizza(pizzaSize, pizzaAmount);

    pizza.setPizzaToppings(pizzaTop);

    finalCost = pizza.calculatePizzaSizeCost(pizza.pizzaAmount) + pizza.calculateToppingCost();

    console.log(finalCost);

    $(".total").text("Total Cost: $ " + finalCost);

    $("h3.total").show();
    $("#confirmPurchase").show();
  });

  $("#confirmPurchase").click(function() {

    $(".ulToppings").empty();
    $("#pizzaSize").text("Pizza Size: " + pizzaSize);
    $("#pizzaQuantity").text("Amount: " + pizzaAmount);

    for(i=0; i < pizzaTop.length; i++) {
      var value = "";
      if(pizzaTop[i] != "") {
        value = pizzaTop[i];
        $(".ulToppings").append("<li>" + value + "</li>");
      }
    }
    $("#totalPrice").text("Total Cost: $ " + finalCost);

  });
});







Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
