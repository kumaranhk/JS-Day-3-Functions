let inputArr = [1,2,3,4,5];

//Anonymous function
let rotatingArray = function(arr, k) {
    let newArr = [...arr];
    for (let i = 1; i <= k; i++) {
        newArr.unshift(newArr.pop());
    }
    return newArr;
};
console.log("Using anonymus function => ",rotatingArray(inputArr,3));

//IIFE
(function (arr,k){
    let newArr = [...arr];
    for (let i = 1; i <= k; i++) {
        newArr.unshift(newArr.pop());
    }
    console.log("Using IIFE => ",newArr);
})(inputArr,3);