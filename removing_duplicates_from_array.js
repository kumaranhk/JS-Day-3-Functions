let inputArr = [1,2,3,4,5,6,5,8,1,0];

//Anonymous function
let removingDupElements = function (arr){
    let anonymousFunctionArr = [];
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (anonymousFunctionArr.indexOf(num) === -1) {
            anonymousFunctionArr.push(num);
        }
      }
    return anonymousFunctionArr;
}
console.log("Using anonymus function => ",removingDupElements(inputArr));

//IIFE
(function (arr){
    let iifeArr =[];
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (iifeArr.indexOf(num) === -1) {
            iifeArr.push(num);
        }
      }
    console.log("Using IIFE => ",iifeArr);  
})(inputArr);