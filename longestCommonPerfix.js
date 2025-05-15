// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
let strs = ["flower","flow","flight"];
var longestCommonPrefix = function(strs) {
    let newStr = strs.sort();
    let first = newStr[0]
    let last = newStr[newStr.length - 1]
    let result = ""
    for(let i = 0; i < first.length; i++){
        if(first[i] !== last[i]){
            break;
        }
        result = result + first[i];
    }
    return result;
};
console.log(longestCommonPrefix(strs));