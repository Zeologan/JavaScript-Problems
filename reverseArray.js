// Reverse the Array , Think About Time Complexcity , Don't Create New Array 

let arr = [1,2,3,4,5]
for (let i = 0; i < arr.length; i++) {
    let a = Number(arr.splice((arr.length - 1), 1));
    arr.splice(i, 0, a);
}
console.log(arr);