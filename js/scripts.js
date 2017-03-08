
// back end
var finalCost = 0;
var toppingPrice = 0;
var pizzaSizePrice = 0;
var pizzaSize
var pizzaTops1
var newPapiPizza
var finalPizza
var finalToppings

function PapiPizza(pizzaSize) {
  this.pizzaToppings = [];
  this.pizzaSize = pizzaSize;

  }

PapiPizza.prototype.calculateSize = function() {
  if (this.pizzaSize === "small") {
     pizzaSizePrice = 8;
  } else if (this.pizzaSize === "large") {
         pizzaSizePrice = 16;
  }
  return pizzaSizePrice;
}

PapiPizza.prototype.calculateTopping = function() {
  var toppingCost = 0;
  totalCost = this.pizzaToppings.length;
  return toppingCost;
}

PapiPizza.prototype.calculateFinalCost = function() {
  finalCost = pizzaSizePrice + toppingCost;
  return finalCost;
  console.log(finalCost);
}

// fron end
$(document).ready(function() {
  $("form#papiOrder").submit(function(event) {
   event.preventDefault();
   debugger;
   var finalToppings = [];
   var toppingArray = ["top1", "top2", "top3"];

   toppingArray.forEach(function(pizza) {
      var checkBox = ("#" + pizza).toString();
      var value = $(checkBox).val();
      var checked = $(checkBox).is(':checked');
      if (checked === true) {
        finalToppings.push(value);
      }
    });
    console.log(finalToppings);

   var pizzaSize = $("input:radio[name=size]:checked").val();
    return  $(this).val();


//    var pizzaTops1 = $("input:checkbox[name=pizzaTops]:checked").each(function(){
//     finalToppings.push($(this).val());
// });

    console.log(finalToppings);
     console.log(pizzaSize);


   newPapiPizza = new PapiPizza(pizzaSize, finalToppings);
   pizzaSize = newPapiPizza.prototype.calculateSize();
  finalToppings = newPapiPizza.prototype.calculateTopping();
   finalPizza =newPapiPizza.prototype.calculateFinalCost();
    });

   $("#sizePrice").html(pizzaSize);
   $("#toppingPrice").html(finalToppings);
   $("#finalPrice").html(finalPizza);
 });
