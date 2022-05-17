let numbers = [1,2,3,4,5];
//let numbers1 = [1,4,9,16,25];
//square
Array.prototype.square = function () {
    var num1 = [];
    this.map(function (obj) {
        num1.push(obj * obj);
    });
    return num1;
}
console.log(numbers.square());
num1 = [4, 6, 3, 2];

//square root
let numbers1 = [1,4,9,16,25];
const newArr=numbers1.map(Math.sqrt)
console.log(newArr);
num2 = [4, 6, 3, 2];


/*
console.log(arr1.square())
let results = numbers.map(Math.sqrt);
let results1 = numbers.map(Math.pow);
console.log(results);*/