// Climbing Stairs 
// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

var climbStairs = function(n) {
    if(n == 1) return 1;
    let a = 1, b = 1, i = 1;
    while(i < n){
        [a, b] = [b, a+b];
        i++
    }return b
};

console.log(climbStairs(4));