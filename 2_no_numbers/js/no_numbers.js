// Gets the numerical value of a character
function number_val(character){
	return character.charCodeAt(false);
}

// Prints a message containing numbers without using numbers
function no_number_message(){
	var uno  = number_val("b")-number_val("a");
	var dos  = number_val("c")-number_val("a");
	var tres = number_val("d")-number_val("a");
	var diez = number_val("k")-number_val("a");

	var seis = dos*tres;
	var siete = seis+uno;
	var seiscientos = seis*(diez*diez);
	var seiscientos_sesenta_y_siete = seiscientos+(seis*diez)+siete;	

	return "¡Mira, puedo escribir "+uno+","+dos+","+tres+" y "+seiscientos_sesenta_y_siete+" sin usarlos!";
}

var answer = no_number_message();
$("#answer").html(answer);