inputArr = ["madam", "tamil", "malayalam","kumaran"];

//Anonymous function
let palindrome = function (arr){
    let anonymousFunctionArr = [];
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i].split("").join("") == arr[i].split("").reverse().join("")){
            anonymousFunctionArr.push(arr[i]);
        }
    }
    return anonymousFunctionArr;
};
console.log("Using anonymus function => ",palindrome(inputArr));

//IIFE
(function (arr) {
    let iifeArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].split("").join("") == arr[i].split("").reverse().join("")){
            iifeArr.push(arr[i]);
        }
    }
    console.log("Using IIFE => ",iifeArr);
})(inputArr);

//Arrow function
let palindromefn = (arr) => {
    let arrowArr = [];
    for (let i = 0 ; i < arr.length ; i++){
        if (arr[i].split("").join("") == arr[i].split("").reverse().join("")){
            arrowArr.push(arr[i]);
        }
    }
    return arrowArr;
};
console.log("Using Arrow function => ",palindromefn(inputArr));