// Find Target Value by adding 2 number in array and return index val of both element
// nums = [2,7,11,15], target = 9
var twoSum = function(nums, target) {
    for(let i =0; i < nums.length; i++){
        for(let j = i+1;j < nums.length; j++){
            let sum = nums[i] + nums[j];
            if(sum == target){
                return [i,j]
            }
        }
    }
};
console.log(twoSum([2,7,11,15],9));

