let str = 'What a big family it was! The snow was coming down in big heavy flakes now. His big hands came up, grasping her wrists and pulling her forward until her armpits rested on his shoulders. She greeted them with a big smile, hugging each of them as if they were old friends';
let target = 'big';

function findBigWord(str,target){
    let index = str.indexOf(target);
    let arr = [];
    while(index !== -1){
        index = str.indexOf(target , index + 1);
        arr.push(index);
    }
    console.log(arr);
}

findBigWord(str,target);