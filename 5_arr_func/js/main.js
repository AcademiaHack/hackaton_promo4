function factoryFunc(number) {
  var arr_func = [];
  for(var i= 0; i<number; i++) {
    arr_func[i] = wrapper(i);
  }
  return arr_func;
}

function wrapper(number) {
  return function() {
    return number;
  }
}

$("#put").keyup( function() {
  var example_test = $("#text").val();
  var text_to_find = $("#get").val();
  var new_word = $(this).val();
  var replace = example_test.replaceAll(text_to_find, new_word);
  $("#answer").html(replace);
});
