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

var test = "a test";
console.log(test.replaceAll("test","not a test"));
console.log(test);
