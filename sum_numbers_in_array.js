let inputArr = [1,2,3,4,5,6,7,8,9,0];

//Anonymous function
let sum = function(arr){
    let anonymousFunctionSum = 0;
    for (let i = 0; i < arr.length; i++) {
        anonymousFunctionSum += arr[i];
    }
    return anonymousFunctionSum;
}
console.log("Using anonymus function => ",sum(inputArr));

//IIFE
(function (arr){
    let iifeSum = 0;
    for (let i = 0; i < arr.length; i++) {
        iifeSum += arr[i];
    }
    console.log("Using IIFE => ",iifeSum);
})(inputArr);

let arrowFunctionSum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log("Using Arrow function => ",arrowFunctionSum(inputArr));
