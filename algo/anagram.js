/*
  Given two strings, write a function to determine 
  if the second string is an anagram of the first.
  An anagram is a word, phrase, or name formed by rearranging the letters of another,
  such as "cinema", formed from "iceman".
 */

function validAnagram(str1, str2) {
  // return false if the length of those two strings is different
  if (str1.length !== str2.length) {
    return false;
  }
  // make a counter object
  let lookup = {};
  // count the frequency of each characters in str1
  for (let char of str1) {
    // if letter exists, increment, otherwise set to 1
    lookup[char] = (lookup[char] + 1 || 1);
  }
  // compare the frequency of it to that of str2
  for (let char of str2) {
    if (lookup[char]) {
      lookup[char]--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('', '') == true);
console.log(validAnagram('aaz', 'zza') == false);
console.log(validAnagram('anagram', 'nagaram') == true);
console.log(validAnagram('rat', 'fat') == false);
console.log(validAnagram('cinema', 'iceman') == true);
console.log(validAnagram('11111', '111') == false);