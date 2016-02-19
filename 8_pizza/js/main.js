function hackPizzaIterative(cuts){
	var slices = [];
	var temp_number=0;

	for (var i = 0; i <= cuts; i++) {
		switch (i) {
		    case 0:
		    	temp_number=1;
		    	break;
		    case 1:
		    	temp_number=2;
		        break;
		    case 2:
		    	temp_number=4;
		        break;
		    case 3:
		    	temp_number=7;
		        break;
		    default:
		    	temp_number=slices[i-1] + i;
		        break;
		}
		slices.push(temp_number);
	}

	return slices[cuts];
}

function hackPizza(cuts){
	switch (parseInt(cuts)) {
	    case 0:
	        return 1;
	    case 1:
	        return 2;
	    case 2:
	        return 4;
	    case 3:
	        return 7;
	    default:
			return hackPizza(cuts - 1) + cuts;
	}
}

console.log(hackPizza(6));

$("#text").keyup( function() {
  var example_test = $(this).val();
  var replace = hackPizza(parseInt(example_test));
  $("#answer").html(replace);
});