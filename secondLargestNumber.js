// Find 2nd Largest Number in Array  

const secondLargestNumber = function(arr){
    // console.log(arr);
    let first = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }else if(arr[i] != first && arr[i] > second){
            second = arr[i]
        }
    }console.log(second)
}
secondLargestNumber([34,21,35,23,45,54,27,33,90,91]);