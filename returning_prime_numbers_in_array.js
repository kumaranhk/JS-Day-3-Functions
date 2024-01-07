let inputArr = [1,2,3,4,5,6,7,8,9,0,-1,17,55];

//Anonymous function
let primeNums = function (arr) {
    let anonymousFunctionArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])){
            anonymousFunctionArr.push(arr[i]);
        }
    }
    return anonymousFunctionArr;
};
console.log("Using anonymus function => ",primeNums(inputArr));

//IIFE
(function (arr){
    let iifeArr =[];
    for (let i = 0; i < arr.length; i++){
        if (isPrime(arr[i])){
            iifeArr.push(arr[i]);
        }
    }
    console.log("Using IIFE => ",iifeArr);
})(inputArr);

//Arrow function
let prime = (arr) => {
    let arrowArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])){
            arrowArr.push(arr[i]);
        }
    }
    return arrowArr;
};
console.log("Using Arrow function => ",prime(inputArr));

//Function for checking whether the is prime
function isPrime(num) {  
    if (num <= 1){
        return false; 
    }    
    for (let i = 2; i < num; i++){
        if (num % i == 0) 
            return false;
    }    
    return true; 
}
