function palindrome(str) {
  str = str.toLowerCase();

  let regex = /\W|_/g;

  str = str.replace(regex, '');

  console.log(str);

  for (var i = 0; i < str.length; i++) {
    var j = str.length - 1 - i;

    if (str[i] != str[j]) 
      return false;
  }

  return true;
}

console.log(palindrome("race car"));
