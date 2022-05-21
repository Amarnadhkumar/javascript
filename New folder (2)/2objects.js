function person(fname,lname,age,skills,dateofbirth,address,married,profession)
   {
     this.fname = fname;
     this.lname = lname;
     this.age=age;
     this.skills = skills;
     this.dateofbirth = dateofbirth;
     this.address = address;
     this.married = married;
     this.profession = profession;
   }
Amitab=new person("Amitab","bachan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},"false","sr analyst")
Abhishek=new person("Abhishek",21,"HTML","08/06/1997","false","jr analyst")
Aaradhya = new Person("Aaradhya",10,"01/01/2005","false","film");

var Abhishek = Object.create(Amithabh); //inheriting the common properties/storing Amithabh object in Abhishek
var Aaradhya = Object.create(Abhishek);  
print = function()
{
    console.log(Amitab);
    console.log(Abhishek.lastName);
    console.log(Abhishek.address);
    console.log(Aaradhya.lastName);
    console.log(Aaradhya.skills);
    console.log(Aaradhya.address);
    console.log(Aaradhya.firstName);
}()