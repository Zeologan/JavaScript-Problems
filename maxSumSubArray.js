// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Brute Force ->>>
// var maxSubArray = function(nums) {
//     let maxSum = nums[0];
//     let startIndex, endIndex;
//     for(let i = 0; i < nums.length; i++){
//         let currentSum = 0;
//         for(let j = i; j < nums.length; j++){
//             currentSum = currentSum + nums[j];
//             if(currentSum > maxSum){
//                 maxSum = currentSum;
//                 startIndex = i;
//                 endIndex = j;
//             }
//         }
//     }return {
//         sums : maxSum,
//         arr : nums.slice(startIndex, endIndex + 1),
//     }

// };
// console.log(maxSubArray([5,4,-1,7,8]))

// Kadane Algo

var maxSubArray = function (nums) {
  let maxSum = nums[0], sum = 0;
  for (let i of nums) {
    sum = sum + i;
    if (sum > maxSum) {
      maxSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }return maxSum;
};
console.log(maxSubArray([5,4,-1,7,8]));
