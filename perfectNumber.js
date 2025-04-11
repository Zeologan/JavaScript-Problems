// Find Perfect Nubmer 
// 6, 28, 496, 8128 
// 6 : 1,2,3 = 1+2+3 = 6 = true

function perfectNumber (num){
    let sum = 0;
    for(let i = 1; i < num; i++){
        if((num % i) == 0){
            sum += i;
        }
    }
    return num === sum;
}
// perfectNumber(28);
console.log(perfectNumber(8128));

