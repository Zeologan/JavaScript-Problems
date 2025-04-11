// create 3d Matrix from 2d Matrix.........
// martix = [
//   [1, 5],
//   [2, 6],
//   [3, 7],
//   [4, 8],
// ];

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
function tranform(matrix) {
  let column = matrix[1].length;
  let row = matrix.length;
  let newArray = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      // console.log(matrix[i][j]);
      if (!newArray[j]) {
        newArray[j] = [];
      }
      newArray[j][i] = matrix[i][j];
    }
  }
  return newArray;
}
console.log(tranform(matrix));
