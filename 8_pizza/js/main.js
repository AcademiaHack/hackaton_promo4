function hackPizza(cuts){
  if(cuts == 3) {
    return 7;
  } else {
    return hackPizza(cuts - 1) + cuts;
  }
}

/*console.log(hackPizza(6));*/

$("#text").keyup( function() {
  var example_test = $(this).val();
  var replace = hackPizza(parseInt(example_test));
  $("#answer").html(replace);
});