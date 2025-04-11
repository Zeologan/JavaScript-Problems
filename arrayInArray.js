arr = [1,2,3,4,5,6,7];
target = 2
max = [];
result = []
// for(let i=0; i< arr.length; i++){
//     if(max.length < target){
//         max.push(arr[i]);
//         if(max.length == target){
//             result.push(max);
//             max = [];
//         }else if(i == arr.length -1){
//             result.push(max)
//         }
//     }
// }
// console.log(result);

// Rest Operater 
for(let i=0; i< arr.length; i++){
    if(max.length < target){
        max.push(arr[i]);
        if(max.length == target){
            result.push(...max);
            max = 0;
        }else if(i == arr.length -1){
            result.push(max)
        }
    }
}
console.log(result);