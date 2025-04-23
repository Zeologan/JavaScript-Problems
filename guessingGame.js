import PromptSync from "prompt-sync";
const prompt = PromptSync();
const num = Math.floor(Math.random() * 100)+1;
// console.log(num);
let guess;
// while(true){
//     guess = prompt('Guess The Number... : ');
//     if(guess == num){
//         console.log(`congratulations Correct Guess`);
//     break;
//     }else if(guess > num && guess < num + 5){
//         console.log('high');
//     }else if(guess > num){
//         console.log('too high');
//     }else if(guess > num - 5){
//         console.log('low');
//     }else{
//         console.log('too low');
//     }
// }



// Refactor Version 
while(true){
    guess = Number(prompt('Guess The Number... : '));

    if(!guess || guess < 0 || guess > 100){
        console.log('Guess number in range of 0 - 100!...');
        continue;
    }

    if(guess === num){
        console.log(`congratulations Correct Guess`);
        break;
    }
    let difference = Math.abs(guess - num);
    if(guess > num){
        console.log(difference <= 5 ? 'High':'Too High');
    }else{
        console.log(difference <= 5 ? 'Low':'Too Low');
    }
}