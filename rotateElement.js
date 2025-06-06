// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// var rotate = function(nums, k) {
//     let i = 0;
//     while(i < k){
//         nums.unshift(nums.pop())
//         i++
//     }
//     console.log(nums)
// };
// rotate([1,2,3,4,5,6,7], 3);

function rotate(nums,k){
    let size = nums.length;
    if(k > size){
        k = k%size;
    }
    const rotated = nums.splice(size - k, k);
    nums.unshift(...rotated);
    console.log(nums);
}
rotate([1,2], 5)
