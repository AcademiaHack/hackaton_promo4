function number_val(character){
	return character.charCodeAt(false);
}

uno=number_val("b")-number_val("a");
dos=number_val("c")-number_val("a");
tres=number_val("d")-number_val("a");
diez=number_val("k")-number_val("a");

seis=dos*tres;
siete=seis+uno;
seiscientos=seis*(diez*diez);
seiscientos_sesenta_y_siete=seiscientos+(seis*diez)+siete;

console.log("¡Mira, puedo escribir "+uno+","+dos+","+tres+" y "+seiscientos_sesenta_y_siete+" sin usarlos!");