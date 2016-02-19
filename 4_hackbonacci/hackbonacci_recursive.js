// Checks if a given number exists in a given array.
function contains(a, elem){
	for (var i = 0; i < a.length; i++) {
		if(a[i] === elem){
			return true;
		}		
	}
	return false
}

// Checks if a given number is even
function isEven(num){
	return num % 2 == 0;
}

// Calculate the Hackbonacci of a number recursively.
function fibCalc(number){
	switch (parseInt(number)) {
	    case 0:
	        return 0;
	        break;
	    case 1:
	        return 1;
	        break;
	    case 2:
	        return 1;
	        break;
	    case 3:
	        return 2;
	        break;
	    case 4:
	        return 4;
	        break;
	    default:
			return fibCalc(number-1)+fibCalc(number-2)+fibCalc(number-3)+fibCalc(number-4)+fibCalc(number-5);
	        break;
	}
}

// Calculate the number of uneven numbers inside a Hackbonacci sequence of numbers.
function oddHackbonacci(num){
	var fibNumbers = [];
	var temporal_number=0;

	for (var i = 0; i <= num; i++) {
		temporal_number=fibCalc(i);
		if(!isEven(temporal_number)){
			if(!contains(fibNumbers, temporal_number)){
				fibNumbers.push(temporal_number);
			}
		}
	}

	return fibNumbers.length;
}


// Testing the program....
// var value = oddHackbonacci(15);
// console.log(value);
