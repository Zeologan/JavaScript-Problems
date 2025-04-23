// # Add Two Numbers Represented by Linked Lists
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function addTwoNumber(l1,l2){
    // console.log(l1);
    let a = "", b = "";
    let sum = 0;
    for(let i = 0; i < l1.length;i++){
        a += l1[i];
    }
    
    for(let i = 0; i < l1.length;i++){
        b += l2[i];
    }
    sum = String(Number(a)+Number(b)).split('').reverse();
    let result = sum.map((i) => Number(i));
    console.log(result)
}

addTwoNumber([2,4,3],[5,6,4])