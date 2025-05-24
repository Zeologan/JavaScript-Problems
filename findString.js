// Find the Index of the First Occurrence in a String
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0

var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length - needle.length +1; i++){
        // console.log(haystack[i])
        if(haystack.slice(i,i + needle.length) === needle){
            return i;
            break;
        }
    }
    return -1;
};