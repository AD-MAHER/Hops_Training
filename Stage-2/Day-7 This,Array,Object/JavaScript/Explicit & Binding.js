//New Binding or Constructor Invoking
function myFunction(a) {
    console.log(a);
    console.log(this.name);
    console.log(this)     
  }
  
  const objBind = {
   name: "Binding & Explicit", 
    myFun: myFunction,
  }

myFunction.call(objBind,98)  //first give object and than parameter
myFunction.apply(objBind,[9])//first give object  and thand parameter in "array"
myFunction.call(window)//

var b = myFunction.bind(objBind,8) //Its used to bind function and object together
b();

var b = myFunction.bind(objBind,objBind.name)
var b = myFunction.bind(window,56)

b();