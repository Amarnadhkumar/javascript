//object with firstName and lastName properties
var Person = {
    firstName : "Amar",
    lastName : "Vutukuri"
};
console.log(Person);

//reading the middleName property from the variable.

var Person = {
  firstName: "Amar",
  middleName: "naga venkata kasi",
  lastName: "Vutukuri",
};


//declaring object with constructor function
var Rectangle = function (
  width,
  height 
) {
  this.width = width;
  this.height = height;
  this.area = function () {
    console.log("Area of the Rectangle is : " + this.width * this.height);
  };
};
 //calling objects/making intances
var myRectangle1 = new Rectangle(40, 10);
var myRectangle2 = new Rectangle(50, 10);


//calling objects properties
console.log(myRectangle1.width); 
console.log(myRectangle1.height);
myRectangle1.area();
console.log(":::::::::::::::::::");
//calling objects properties
console.log(myRectangle2.width); 
console.log(myRectangle2.height);
myRectangle2.area();


//Adding getArea method using prototype property
var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

};
//using prototype
Rectangle.prototype.getArea = function () {
  console.log(
    "Getting Area using prototype property : " + this.width * this.height
  );
};
//calling objectsmaking intances
var myRectangle1 = new Rectangle(40, 10);
var myRectangle2 = new Rectangle(50, 10);

console.log(Rectangle.prototype);
//calling method which is created using prototype property
myRectangle1.getArea();
myRectangle2.getArea();

//use eval() property.
var myString = new String("5 + 10");
eval(myString.toString());
console.log(eval(myString.toString()));