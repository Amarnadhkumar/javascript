function composedValue(square, double, value){
    var result1 = square(value);
    var result2 = double(result1);
      console.log("Composed result is",result2 );
  }
  
  function square(x){
      return x*x;
  }
  function double(x){
      return 2*x;
  }
  
  composedValue(square, double,5);