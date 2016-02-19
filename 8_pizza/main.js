function hackPizza(cuts){
  if(cuts == 3) {
    return 7;
  } else {
    return hackPizza(cuts - 1) + cuts;
  }
}

console.log(hackPizza(6));
