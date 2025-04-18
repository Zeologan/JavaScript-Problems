// Create a Alarm Which Console Ring... [User Define Time] 
import PromptSync from "prompt-sync";
const prompt = PromptSync();
//UserInput 
const hour = parseInt(prompt('Hour :'));
const min = parseInt(prompt('min :'));

const alarm = setInterval(ringAlarm,1000);
function ringAlarm (){
    let time = new Date();
    let realHour = time.getHours();
    let realMin = time.getMinutes();
    if(realMin == min && realHour == hour){
        console.log(`Alarm Is Ringing .... Time is ${hour}:${min}`);
        clearInterval(alarm);
    }
}







