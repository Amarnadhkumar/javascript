
let f1=compose(5,10)
function compose(square,double){
   return math.pow(square**double);
 
}
console.log(f1);
console.log(f1);

let f2=compose(5,10)
function compose(double,square){
    return double*square
}
console.log(f2);
console.log(f2);

/*
function doubling(number) {
    number *= 2;
    return number;
}
console.log(numbers.square());
    console.log(number);
    console.log(number1)
let num1=1
Array.prototype.square = function () {
    var num1 = [];
    this.map(function (obj) {
        num1.push(obj * obj);
    });
    return num1;
}
console.log(numbers.square());
    console.log(number);
    console.log(number1)*/