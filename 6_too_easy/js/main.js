function sum(number) {
  return (number * (number + 1))/2
}
/*console.log(sum(5));*/

$("#text").keyup( function() {
  var number = $(this).val();
  var sumatoria = sum(parseInt(number));
  $("#answer").html(sumatoria);
});
