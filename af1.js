function isEven(num) { 
    return(num%2 == 0);
 }
var arr = [1, 2, 4, 5, 7];
function findRecursive(arr, func) {
    var p = arr.shift();
    if (func(p) == true)
        return p;
    else 
        findRecursive(arr, func);
}
findRecursive(arr, isEven);
console.log(arr);