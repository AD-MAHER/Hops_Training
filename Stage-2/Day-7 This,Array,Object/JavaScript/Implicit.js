// default binding

//  Implicit Binding

function myFunction() {
  console.log(this.name);
  console.log(this);
}

const objEmplicit = {
  name: "implicit",
  myFun: myFunction,
};

objEmplicit.myFun(); //here context of myFun() is Obj so, it will return "OBJ" object
window.myFun(); //here context of window so, it will return window object



var person = {
  1 : "Hops person"
}

console.log(person["1"] );

// function sum(){
//   var add = 2+2;
//   console.log("Sum = " + add)
//   console.log(this)
//   console.log(this.add)
// }
// sum()

// const amd = {
//   name: "Ajay Divraniya",
//   study : "B.E.",
//   sum:function(){
//     var add = 2+2;
//     console.log("Sum of Two Number is " + add);
//     console.log(this);
//   }
// }

// amd.sum()

// console.log(thapa.sum());
