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
