let inputArr1 = [1,5,2,4,3];
let inputArr2 = [11,9];

//Anonymous function
let median = function (arr1,arr2){
    let arr = arr1.concat(arr2).sort((a,b) => a - b );
    let median = 0;
    if ( arr.length % 2 != 0){
        median = arr[Math.floor(arr.length/2)] / 2;
    }
    else {
        median = (arr[arr.length/2] + arr[(arr.length/2) - 1]) / 2;
    }
    return median;
};
console.log("Using anonymus function =>",median(inputArr1,inputArr2));

//IIFE
(function (arr1,arr2){
    let arr = arr1.concat(arr2).sort((a,b) => a - b );
    let median = 0;
    if ( arr.length % 2 != 0){
        median = arr[Math.floor(arr.length/2)] / 2;
    }
    else {
        median = (arr[arr.length/2] + arr[(arr.length/2) - 1]) / 2;
    }
    console.log("Using IIFE => ",median);
})(inputArr1,inputArr2);