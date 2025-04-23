import PromptSync from "prompt-sync";
const prompt = PromptSync();

const op = parseInt(
  prompt("Lets do the Calculation : 1 => + | 2 => - | 3 => * | 4 => / : ")
);
let cal;

if (op > 0 && op < 5) {
  const input1 = prompt("Enter Your 1st Number : ");
  const input2 = prompt("Enter Your 2st Number: ");

  switch (op) {
    case 1:
      cal = input1 + input2;
      break;
    case 2:
      cal = input1 - input2;
      break;
    case 3:
      cal = input1 * input2;
      break;
    case 4:
      cal = input1 / input2;
      break;
  }
  console.log(cal);
}else{
    console.log('Please Enter Proper Numbers')
}
