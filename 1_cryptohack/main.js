function encode_ascii(key, first, last) {
  first = first.charCodeAt(0);
  last = last.charCodeAt(0);

  current_key = last - key + first;
  current_key = parseInt(current_key,10)
  current_key = String.fromCharCode(current_key);
  return current_key;
}

function translate(key) {
  var letter;
  var current_key;
  var decrypted_key;
  var decrypted = [];

  letter = key.split('');

  for(var i = 0; i < letter.length; i++) {
    current_key = key.charCodeAt(i);
    if(current_key >= 97 && current_key <= 122) {
      decrypted_key = encode_ascii(current_key, 'a', 'z');
    } else if(current_key >= 65 && current_key <= 90) {
      decrypted_key = encode_ascii(current_key, 'A', 'Z');
    } else {
      decrypted_key = String.fromCharCode(current_key);
    }

    decrypted.push(decrypted_key);
  }

  return decrypted.join('');
}

console.log(translate('IlM3434.xi989'));
