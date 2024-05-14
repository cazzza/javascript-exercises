const palindromes = function (string) {
    // makes string lowercase, turns into array, and creates puncuation array
    string = string.toLowerCase();
    const chars = string.split('');
    const punc = ['.', '!'];

    // compares punctuation array to ending character in target array
    // removes last character in target array if matches
    punc.map((item) => item === chars[chars.length - 1] ? chars.splice(chars.length -1, 1) : chars);


  // iterates through target array
  for (let i = 0; i < chars.length; i++) {
      console.log(`Comparing ${chars[i]} and ${chars[chars.length - 1 - i]}`);
      if (chars[i] !== chars[chars.length - 1 - i]) {
        return false;
      }
  }

return true;
};

// Do not edit below this line
module.exports = palindromes;





//function checkPalindrome(string) {
//    const len = string.length;
//    for (let i = 0; i < len / 2; i++) {
//        if (string[i] !== string[len - 1 - i]) {
//            return 'It is not a palindrome';
//        }
//    }
//    return 'It is a palindrome';
//}
