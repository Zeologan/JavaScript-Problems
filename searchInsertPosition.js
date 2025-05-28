// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compilernums = [1,3,5,6], target = 5/
    // for(let i = 0; i < nums.length; i++){
    //     console.log(nums[i], target)
    //     if(nums[i] == target){
    //         return i;
    //     }else if(nums[i] > target){
    //         return i;
    //     }else if(nums[i] < target && nums[i+1] > target){
    //         return i+1;
    //     }else if(nums[nums.length - 1] < target){
    //         return nums.length;
    //     }
    // }
var searchInsert = function(nums, target) {    
    if(nums[0] > target) return 0;
    if(nums[nums.length -1] < target) return nums.length;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < target && nums[i+1] > target || nums[i] == target) return i;
    }
};
console.log(searchInsert([1,3,5,6],5)); //2
console.log(searchInsert([1,3,5,6],2)); //1
console.log(searchInsert([1,3,5,6],7)); //4
console.log(searchInsert([2,3,5,6],1)); //0