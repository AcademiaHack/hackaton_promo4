// Check if a variable is a number
function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

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

var capacity_callback = function() {
  var capacity_text = $("#capacity").val();
  if(capacity_text.length > 0){
    var number_of_elements = parseInt(capacity_text);
    arr = factoryFunc(number_of_elements);
    $('#text').val(0).attr('max',number_of_elements > 0 ? number_of_elements - 1 : 0).prop('disabled', false);
    $('#answer').html("?");
  }else{
    $('#text').prop('disabled', true);  
  }
}

var array_callback = function() {
  var index = parseInt($("#text").val());
  var answer = arr[index]();
  
  $("#answer").html(answer);
}

$('document').ready(function(){
  var arr;

  $("#capacity").change(capacity_callback);

  $("#text").change(array_callback);
});


