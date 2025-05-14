// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Input: s = "III"
// Output: 3
// Explanation: III = 3.


var romanToInt = function(s) {
    let obj = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let count = 0
    for(let i = 0; i < s.length; i++){
        if( obj[s[i]] < obj[s[i+1]]){
            let a = obj[s[i+1]], b = obj[s[i]]
            count = count + (a - b);
            i++
        }else{
            count += obj[s[i]]
        }
    }
    return count;
};

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))