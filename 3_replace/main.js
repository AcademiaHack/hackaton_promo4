String.prototype.replaceAll = function(textToFind, newText) {
  current = this.toString();
  previous = current;

  while(true) {
    current = current.replace(textToFind, newText);
    if(previous == current) {
      break;
    }
    previous = current;
  }
  return current;
}

var test = "El topo, el paco, topo, puerco, tapo, alto, petopodro";
console.log(test.replaceAll("topo","hack"));
console.log(test);
