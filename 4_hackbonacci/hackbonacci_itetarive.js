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

// Calculate the Hackbonacci of a number iteratively, and Calculate the number of uneven numbers inside a Hackbonacci sequence of numbers.
function oddHackbonacci(number){
	var fibNumbers = [];
	var unevenNumbers = [];
	var temp_number=0;

	for (var i = 0; i <= number; i++) {
		switch (i) {
		    case 0:
		    	temp_number=0;
		    	break;
		    case 1:
		    	temp_number=1;
		        break;
		    case 2:
		    	temp_number=1;
		        break;
		    case 3:
		    	temp_number=2;
		        break;
		    case 4:
		    	temp_number=4;
		        break;
		    default:
		    	temp_number=fibNumbers[i-1]+fibNumbers[i-2]+fibNumbers[i-3]+fibNumbers[i-4]+fibNumbers[i-5];
		        break;
		}
		fibNumbers.push(temp_number);

		if(!isEven(temp_number)){
			if(!contains(unevenNumbers, temp_number)){
				unevenNumbers.push(temp_number);
			}
		}
	}
	return unevenNumbers.length;
}

// Testing the program....
// var value = oddHackbonacci(15);
// console.log(value);
