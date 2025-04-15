// function subStringPalidrome(substring){
//     // console.log(substring.length);
//     let stateUpdate = 2;
//     for(let i = 0; i < substring.length - stateUpdate;i++){
//         // console.log(substring[i]);
//         let state = 3;
//         while(state < Math.floor(substring.length/2)){
//             let newState = i + state;
//             console.log(substring.slice(i, newState))
//         }
//     }
// }
// subStringPalidrome('bradarasdmadamadam');

function subStringPalidrome(substring) {
  arr = [];
  for (let k = 0; k < substring.length / 2; k++) {
    let endPts = k + 2,
      words = k + 3;
    for (let i = 0; i < substring.length - endPts; i++) {
      let endindex = i + words;
      let value = substring.slice(i, endindex);
      rev = "";
      for (let j = value.length - 1; j >= 0; j--) {
        rev = rev + value[j];
      }
      if (value == rev) {
        arr.push(value);
      }
    }
  }
  console.log(arr);
}
subStringPalidrome("bradarasdmadamadam");
