/* 
  Write a function called "same", which accepts two arrays.
  The function should return true if every value in the first array has it's corresponding value
  SQUARED in the second array. The order of values in the second array doesn't matter. 
  The frequency of values must be the same.

  same([1,2,3], [4, 1, 9]) // true
  same([1,2,3], [1, 9]) // false
  same([1,2,1], [4,4,1]) // false
*/

// time complexity: O(N^2)
function same_v1(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i=0; i<arr1.length; i++) {
    const idx = arr2.indexOf(arr1[i]*arr1[i]);
    if (idx == -1) {
      return false;
    }
    arr2.splice(idx, 1); // remove 1 element at index -> appendix
  }
  return true;
}

// time complexity: O(N)
function same_v2(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // key check
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // frequency check
    if (frequencyCounter1[key] != frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(same_v1([1,2,3], [4, 1, 9]) == true);
console.log(same_v1([1,2,3], [1, 9]) == false);
console.log(same_v1([1,2,1], [4,4,1]) == false);

console.log(same_v2([1,2,3], [4, 1, 9]) == true);
console.log(same_v2([1,2,3], [1, 9]) == false);
console.log(same_v2([1,2,1], [4,4,1]) == false);

/* appendix
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
*/