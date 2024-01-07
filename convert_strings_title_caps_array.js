let inputArr = ['hi!', 'you', 'are', 'awesome'];

//Anonymous function
let changingCap = function(arr){
    let anonymousFunctionArr = [];
    for (let i = 0; i < arr.length; i++) {
        anonymousFunctionArr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    return anonymousFunctionArr;
}
console.log("Using anonymus function => ",changingCap(inputArr));

//IIFE
(function (arr) {
    let iifeArr = [];
    for (let i = 0; i < arr.length; i++) {
        iifeArr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    console.log("Using IIFE => ",iifeArr);
})(inputArr);

//Arrow function
let changeCap = (arr) => {
    let arrowArr = [];
    for (let i = 0; i < arr.length; i++) {
        arrowArr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    return arrowArr;
}
console.log("Using Arrow function => ",changeCap(inputArr));