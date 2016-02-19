// Next number for the middle numbers
function nextNumber(number){
	return number === 9 ? 0 : number + 1;
}

// Next number for the first number
function nextNumberLast(number){
	return number + 1;
}

// Split function for varsion sting array submitted
function splitAndNumberTransform(phrase){
	return phrase.split('.').map(function(elem) {
	  return isNaN(parseInt(elem)) ? elem : parseInt(elem) ;
	});
}

// Check if a variable is a number
function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}
	
// Calculates the next version of the version string submitted
function nextVersion(version){
	var old_version_array = splitAndNumberTransform(version);
	var new_version_array = [];
	var transformed=false;
	var temp = 0;
	var old_number=0;

	for (var i = old_version_array.length - 1; i >= 0; i--) {
		if(isInt(old_version_array[i])){
			old_number=old_version_array[i];
			
			if(transformed){
				new_version_array.unshift(old_number);
			}else{
				if(i===0){
					new_version_array.unshift(nextNumberLast(old_number));
				}else{
					temp = nextNumber(old_number);
					if(temp === 0){
						new_version_array.unshift(temp);
					}else{
						new_version_array.unshift(temp);
						transformed=true;
					}
				}
			}
		}else{
			new_version_array.unshift(old_version_array[i]);
		}		
	}

	return new_version_array.join('.');
}

// Testing the program...
// console.log(nextVersion("1.2.3"));           // "1.2.4"
// console.log(nextVersion("0.9.9"));           // "1.0.0";
// console.log(nextVersion("1"));               // "2";
// console.log(nextVersion("1.2.3.4.5.6.7.8")); // "1.2.3.4.5.6.7.9";
// console.log(nextVersion("9.9"));             // "10.0";

$("#text").keyup( function() {
    var version = $("#text").val();
    var decrypted = version.length > 0 ? nextVersion(version) : "";
    $("#answer").html(decrypted);
});