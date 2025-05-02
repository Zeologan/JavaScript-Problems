// Remove Duplicate Element From Array Without Creating New Array 
// # 1,2,3,4,5

function removeDuplicate(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = Number(i)+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1);
                j-=1
            }
        }
    }return arr;
}
console.log(removeDuplicate([1,2,2,2,3,3,4,4,4,5]));