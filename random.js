// create a otp genrator 
// with forloop
// function genrateOTP(optLength){
//     let otp = '';
//     for(let i = 0; i < optLength; i++){
//         otp += Math.floor(Math.random() * 10);
//     }return otp;

// }
// console.log(genrateOTP(4));

// with WhileLoop

function genrateOTP(optLength){
    let otp = '';
    let i = 0;
    while(i<optLength){
        otp += Math.floor(Math.random() * 10);
        i++;
    }return otp;
}
console.log(genrateOTP(4));