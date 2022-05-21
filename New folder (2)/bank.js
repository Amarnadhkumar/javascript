function saving(isSalary,accNumber,accName, accBalance) {
    this.isSalary=isSalary;
    this.accNumber=accNumber
    this.accName = accName;
    this.accBalance = accBalance;
    this.withdraw=function(amount)
{
    if(this.accBalance> 0 && this.accBalance< 100)
    {
        console.log("Insuffient balance! You have less than 100 rs.");
    } 
    if((this.accBalance>= 100 && this.accBalance<= 500) && amount === 200)
    {
        this.accBalance= this.accBalance- amount;
        console.log("Your money after debiting : " + this.accountBalance);
    }
    if((this.accBalance> 500 && this.accBalance<= 5000) && amount === 500 || amount === 2000);
    {
        this.accBalance= this.accBalance- amount;
        console.log("Your money after debiting : " + this.accountBalance);
    }
    if((this.accBalance> 5000) && amount === 200 || amount === 500 || amount ===2000)
    {
        this.accBalance= this.accBalance- amount;
        console.log("Your money after debiting : " + this.accountBalance);
    }
    if(this.accBalance<= 0)
    {
        console.log("Insufficient!");
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accBalance);
    };
  }
    function Current(odLimit,accNumber,accName,accBalance)
{
    this.odLimit = odLimit;
    this.accNumber = accNumber;
    this.accName = accName;
    this.accBalance= accBalance;
    this.withdraw = function(amount)
    {
        if(odLimit > 500)
        {
            if((this.accBalance> 500 && this.accBalance< 2000) && amount === 200 || amount === 500)
            {
                this.accBalance= this.accBalance- amount;
                console.log("Your balance after debiting the money is : " +this.accBalance);
            }
            if((this.accBalance> 2000) && amount=== 200 || amount === 500 || amount === 2000)
            {
                this.accBalance= this.accBalance- amount;
                console.log("Your balance after debiting the money is : " +this.accBalance);
            }
        } 
        else
        {  
            console.log("Your odLimit for Current acocunt is less than 500");
        }  
    };
    this.getCurrentBalance = function()
    {
        console.log("Your current Account balance is : " + this.accBalance);
    };
}
}
var person = new Account(23456,"Amar",4222);
console.log(person);

var objsavings = new savings("true",98765,"abc",697); //creating Savings object
console.log(objsavings);
console.log(objsavings.withdraw(100));
console.log(objsavings.getCurrentBalance());

var objcurrent = new current(410,5678,"xyz",9867); //creating Current object
console.log(objcurrent);
console.log(objcurrent.withdraw(1000));
console.log(objcurrent.getCurrentBalance());