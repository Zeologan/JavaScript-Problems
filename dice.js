import PromptSync from "prompt-sync";

const prompt = PromptSync();
const dice = prompt('Enter number of dice : ');
const side = prompt('Enter number of side of dice : ');

// function dices(dices, side){
//     let point = [];
//     for(let i = 0; i < dices; i++){
//         point.push(Math.floor(Math.random()*(side - 1 + 1) + 1));
//     } 
//     console.log(point);
// }
// dices(dice,side);

((dice,side)=>{
    let point = [];
    for(let i = 0; i < dice;i++){
        point.push(Math.floor(Math.random()*(side - 1 + 1) + 1));
    }
    return point;
})();