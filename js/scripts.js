//business logic
PizzaTime(size) {
  this.size = size;
  this.toppings= [];
}

pizzaSize(){
return this.size;
}

pizzaToppings(){
return this.toppings;
}

newSize(size){
  this.size=size;
}

newToppings(toppings){
  this.toppings=toppings;
}

PizzaTime.prototype.pizzaPrice = function(){
  var finalCost = 0;
  if(this.size === "large"){
    finalCost = 12;
  } else if(this.size === "medium"){
    finalCost = 8;
  } else if(this.size === "small"){
    finalCost = 6;
  }
}

  if(this.toppings.length === 8){
    finalCost = finalCost + 8;
  }else if(this.toppings.length === 7){
    finalCost = finalCost + 7;
  }else if(this.toppings.length ===6){
    finalCost = finalCost + 6;
  }else if(this.toppings.length === 5){
    finalCost = finalCost + 5;
  }else if(this.toppings.length ===4){
    finalCost = finalCost + 4;
  }else if(this.toppings.length === 3){
    finalCost = finalCost + 3;
  }else if(this.toppings.length ===2){
    finalCost = finalCost + 2;
  }else if(this.toppings.length === 1){
    finalCost = finalCost + 1;
  }
