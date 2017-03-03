//business logic
debugger;
function PizzaValue(amountValue, toppingValue) {
  this.amountValue = amountvalue;
  this.toppingValue = toppingValue;
}

  var toppingValue = 0;
  var inputElements = document.getElementsByClassName('pizzaTop');
  for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
             toppingValue = inputElements[i].value;

        }
  }

  var amountValue = 0;
  var inputElements = document.getElementsByClassName('sizeSelector');
  for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
             amountValue = inputElements[i].value;

        }
  }
  var pizzaTime = document.getElementById("pizzaTime")
function clickCh(caller){
if(caller.checked){
add(caller)
} else {
subtract(caller)
}
}
function add(caller){ total.value = total.value*1 + caller.value*1}
function subtract(caller){ total.value = total.value*1 - caller.value*1}

console.log(amountValue);
console.log(toppingValue);
console.log(PizzaValue);
 $(document).ready(function() {
console.log(pizzaTime);

// var selectedPizzaCount = 0;
// var selectedPizzaType = "";
//
//
//   $(".pizzaPicker").on("change keyup", function() {
//     $("#totalCost").val(function() {
//         var toppingVal = parseInt($(this).siblings(":checked").val());
//         var countVal = parseInt($("#min").val()) || 0;
//
//         return toppingVal + countVal;
//     });
// });
//
//
//
  $("form.pizzaPicker").submit(function(event) {
    event.preventDefault();
//
  });
//
 });
