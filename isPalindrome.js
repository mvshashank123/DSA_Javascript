// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str1) {
  // add whatever parameters you deem necessary - good luck!

  let str2 = "";

  const helper = (str) => {
    if (str.length === 0) {
      return str2;
    }

    str2 = str2.concat(str.charAt(str.length - 1));

    return helper(str.substring(0, str.length - 1));
  };

  helper(str1);

  return str1 === str2;
}
