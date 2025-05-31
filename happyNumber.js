// Happy Number 
// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// else false

var isHappy = function(n) {
    let sum = 0, digit = 0 ,count = 0
    while(n != 1){
        count++
        while(n != 0){
            digit = n % 10;
            sum = sum + Math.pow(digit,2);
            n = Math.floor(n / 10);
        }
        n = sum;
        sum = 0;
        if(count == 20) break;
    }
    return n == 1;
};
console.log(isHappy(19));