// let create a game of stone , paper , scissor
// Stone = 1  ~ 2
// Paper = 2 ~ 3
// Scissor = 3 ~ 1

import PromptSync from "prompt-sync";
const prompt = PromptSync();
function funGame() {
  let round = 0;
  let userCount = 0;
  let compCount = 0;
  while (round < 5) {
    let comp = Math.ceil(Math.random() * 3);
    let user = parseInt(prompt("Choose 1.Stone | 2.Paper | 3.Scissor : "));
    if (user == comp) {
      console.log("Draw");
    } else if ((user == 1 && comp == 3) || (user == 2 && comp == 1) || (user == 3 && comp == 2)) {
      userCount++;
      console.log(`User Won This Round!... Score is : ${userCount}`);
    } else {
      compCount++;
      console.log(`Computer Won This Round!... Score is : ${compCount}`);
    }
    round++;
  }

//   Check Who Won The Match 
  if(userCount > compCount){
    console.log(`User Won this Match by ${userCount} Points ..... !!!!`);
  }else if(userCount == compCount){
    console.log(`It's a Draw ~ User Point ${userCount} || Computer Point ${compCount}`);
  }else{
    console.log(`Computer Won this Match by ${compCount} Points ..... !!!!`);
  }
}
funGame();
