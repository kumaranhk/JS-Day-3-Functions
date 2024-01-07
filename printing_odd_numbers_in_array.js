let inputArr = [1,2,3,4,5,6,7,8,9,0];

//Anonymous function
let oddNum = function(arr){
    let anonymousFunctionArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0){
            anonymousFunctionArr.push(arr[i]);
        }
    }
    return anonymousFunctionArr;
};
console.log("Using anonymus function => ",oddNum(inputArr));

//IIFE
(function (arr) {
    let iifeArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0){
            iifeArr.push(arr[i]);
        }
    }
    console.log("Using IIFE => ",iifeArr);
})(inputArr);

//Arrow function
let oddNums = (arr) => {
    let arrowArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0){
            arrowArr.push(arr[i]);
        }
    }
    return arrowArr;
};
console.log("Using Arrow function => ",oddNums(inputArr));