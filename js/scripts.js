
// back end
sizeCost = 0;

function PapiPizza(pizzaSize, pizzaToppings) {
  this.pizzaToppings = pizzaToppings;
  this.pizzaSize = pizzaSize;
  }

  PapiPizza.prototype.calculateSizePrice = function() {
      sizeCost = 0;
      if (this.size === "8") {
    sizeCost = 8.00;
  } else if (this.size === "12") {
    sizeCost = 12.00;
  } else if (this.size === "16") {
    sizeCost = 16.00;
  } else if (this.size === "20") {
    sizeCost = 20.00;
  }
  }

  PapiPizza.prototype.calculatePizzaPrice = function() {
     return (this.pizzaToppings.length * 2.00 + this.pizzaSize).toFixed(2);
   }

// front end
$(document).ready(function() {
  $("form#papiOrder").submit(function(event) {
    $("#pizzaOutput").empty();
    $("#finalToppings").empty();

   event.preventDefault();
   debugger;
   var finalToppings = [];
   var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
   $('input[type=checkbox]').each(function(){
         if (this.checked) {
           finalToppings.push($(this).val());
     }
   });

   newPapiPizza = new PapiPizza(pizzaSize, finalToppings);
   $("#pizzaOutput").append("<p>TOTAL: $" + newPapiPizza.calculatePizzaPrice() + "</p>");
      finalToppings.forEach(function(finalPizzaTopping){
        $("#toppingOutput").append("<li>" + finalPizzaTopping + "</li>");
          $(".finalToppings").show();
          $("#papi").show();
      });
  });
});
