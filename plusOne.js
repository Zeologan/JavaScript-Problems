// # Plus One
// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

var plusOne = function(digits) {
   digits = BigInt(digits.join('')) + BigInt(1);
   digits = digits.toString().split('').map(x => Number(x));
   console.log(digits) 
};
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);