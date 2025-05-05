// Minimum Domino Rotations For Equal Row
let dice1 = [2,3,2,2,5,2], 
    dice2 = [1,2,3,3,2,2];  
    // output - [2,2,2,2,2,2] -1

function findEqual(dice1,dice2){
    let count = 0; usestate = 1,val = 0;
    let count1 = 0; usestate1 = 1,val1 = 0;
    for(let i = 0; i < dice1.length;i++){
        for(let j = i+1; j < dice1.length; j++){
            if(dice1[i] == dice1[j]){
                usestate++
                // console.log(usestate,dice1[i],dice1[j])
            }
            if(dice2[i] == dice2[j]){
                usestate1++
                // console.log(usestate,dice1[i],dice1[j])
            }
        }
        if(usestate > count){
         count = usestate;
         usestate = 1;
         val = dice1[i]
        }
        if(usestate1 > count1){
         count1 = usestate1;
         usestate1 = 1;
         val1 = dice2[i]
        }
    }
    console.log(count,val);
    console.log(count1,val1);
    if(count > count1){
        for(let i = 0; i < dice1.length;i++){
            if(dice1[i] !== val){
                dice1.splice(i,1,dice2[i])
            }
        }
        for(let j = 0; j < dice1.length;j++){
            if(dice1[j] !== val){
                return -1;
            }
        }return val 
    }else{
        for(let i = 0; i < dice2.length;i++){
        // console.log(dice2[i])
            if(dice2[i] !== val1){
                dice2.splice(i,1,dice1[i])
            }
        }
        
        for(let j = 0; j < dice2.length;j++){
            if(dice2[j] !== val1){
                return -1;
            }
        }return val1 
    }
}
console.log(findEqual(dice1,dice2));