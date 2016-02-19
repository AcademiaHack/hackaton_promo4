String.prototype.replaceAll = function(textToFind, newText) {
  current = this.toString();
  return current.split(textToFind).join(newText);
}

/*console.log(test.replaceAll("topo","hack"));
console.log(test);*/

$("#put").keyup( function() {
  var example_test = $("#text").val();
  var text_to_find = $("#get").val();
  var new_word = $(this).val();
  var replace = example_test.replaceAll(text_to_find, new_word);
  $("#answer").html(replace);
});

$("#text").keyup( function() {
  var example_test = $(this).val();
  var text_to_find = $("#get").val();
  var new_word = $("#put").val();
  var replace = example_test.replaceAll(text_to_find, new_word);
  $("#answer").html(replace);
});

$("#get").keyup( function() {
  var example_test = $("#text").val();
  var text_to_find = $(this).val();
  var new_word = $("#put").val();
  var replace = example_test.replaceAll(text_to_find, new_word);
  $("#answer").html(replace);
});
