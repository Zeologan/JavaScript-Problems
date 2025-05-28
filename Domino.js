// Minimum Domino Rotations For Equal Row
let tops = [1,2,3,3,2,2], 
    bottoms = [2,3,2,2,5,2];  
    // output - [2,2,2,2,2,2] -1

var minDominoRotations = function(tops, bottoms) {
    let count = 0,usestate = 1,val = 0;
    let count1 = 0, usestate1 = 1,val1 = 0;
    for(let i = 0; i < tops.length;i++){
        for(let j = i+1; j < tops.length; j++){
            if(tops[i] == tops[j]){
                usestate++
                // console.log(usestate,tops[i],tops[j])
            }
            if(bottoms[i] == bottoms[j]){
                usestate1++
                // console.log(usestate,tops[i],tops[j])
            }
        }
        if(usestate > count){
         count = usestate;
         usestate = 1;
         val = tops[i]
        }
        if(usestate1 > count1){
         count1 = usestate1;
         usestate1 = 1;
         val1 = bottoms[i]
        }
    }

    // Check If Tops Or Bottom which one have MOre possiblity
    if(count > count1){
        for(let i = 0; i < tops.length;i++){
            if(tops[i] !== val){
                tops.splice(i,1,bottoms[i])
            }
        }
        for(let j = 0; j < tops.length;j++){
            if(tops[j] !== val){
                return -1;
            }
        }return val 
    }else if(count < count1){
        for(let i = 0; i < bottoms.length;i++){
        // console.log(bottoms[i])
            if(bottoms[i] !== val1){
                bottoms.splice(i,1,tops[i])
            }
        }
        
        for(let j = 0; j < bottoms.length;j++){
            if(bottoms[j] !== val1){
                return -1;
            }
        }return val1 
    }
};

console.log(minDominoRotations(tops,bottoms));