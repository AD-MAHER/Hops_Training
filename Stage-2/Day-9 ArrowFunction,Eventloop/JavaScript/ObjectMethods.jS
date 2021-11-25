//>>>>>>>>>>>>>>>>>>>>>> Arrow Function <<<<<<<<<<<<<<<<<<<<<<<<<<<<

// let amd = {
//   name: "Ajay",
//   mainFunction: function () {
//     console.log("MainFunction ~~~~~~~~~~~~~~~~ ", this);

//     setTimeout(() => {
//         console.log("HOPS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + this);
//     }, 1000);
// },

//     // const z = function(){z()


    




//   outerFunction : ()=>{
//     return console.log("OuterArrowFunction ~~~~~~~~~~~~~~~~ ", this);
//   },
//   timeOutFunction :  setTimeout(() => {
//           console.log("Set TimeOut ~~~~~~~~~~~~~~~~~~~~~~ ",this );
//       }, 2000),
  
// };

// amd.mainFunction();  //Returns amd Object in both Arrow function and normal Function
// amd.outerFunction(); //Returns window object
//amd.timeOutFunction(); //Returns window object after timeout


//  function   m1() {
//         console.log("M1Function ~~~~~~~~~~~~~~~~ ", this);
//         let y = () => {
//          return console.log("ArrowFunctionM1 ~~~~~~~~~~~~~~~~ ", this);
//         };
//         y()
//       }


// m1 ();



// const z = () => {
//     return console.log("ArrowFunction ~~~~~~~~~~~~~~~~ ", this);
//    };


// function Amd ( ){
//   var j = 0;
//   for(var i = 0;i< arguments.length;i++){
//               j = j+arguments[i];

//   }
//   return j;

// }
// console.log(Amd(1,2,6,10));



// **************************ARRAY DESTRUCTURING******************


const arrayX = ['js','react','event-looping','ant-design','html']
let [top1,top2,top3,top4,top5] = arrayX;






















//***************************Spread Operators****************
// function sum(a,b,c){
//     console.log(a+b+c);
// }

// var spreadArray = [4,6,2];
// sum(...spreadArray); //New Method
// OR
// sum(...[5,6,7]); //New Method

// sum.apply(null,spreadArray)//Old one Method

// >>>>>>>WE CAN ALSO USE AS A STRING CONCATE

// let arr1 = [1,2,3];
// let arr2 = [5,6,7];

// let arr3 = [...arr1,...arr2]  //string contace by spread operators
// console.log(arr3);

//************************Spread Parameters*****************************
// function sum(...ParameterArray){

//     console.log(...ParameterArray);
// }
// sum(1,2,3,4,5,6)

// var ParameterArray = [4,6,2];




// let obj1 = {
//     name : "Ajay",
//     city : "Junagadh",
//     state : "Gujarat",
//     prop1 : 3,
// }

// let obj2 = {
//     name : "Tejas",
//     city : "Arrvali",
// }

// console.log(`obj1`, obj1);
// console.log("obj2" , obj2);

//console.log("obj1 : " +obj1);//its not working***********************>>>>>>>>>>>>
//console.log(`obj1 = ${obj1}`);//its not working***********************>>>>>>>>>>>>





// 1. Object.assign()******************************************************************>>>>>>>>>>>>>>
// Copies the values of all enumerable own properties from one or more source objects to a target object.

//xxxxxxx__________Wrong Method
// const assignedObj = Object.assign(obj1, obj2)
// console.log(assignedObj);
// console.log(obj1);

//_______________Right Method

// Object.assign(obj1, obj2)
// console.log(obj1);

//OBJECT CLONING

// const assignedObj = Object.assign({} , obj2)
// console.log(assignedObj);
// console.log(obj1);



// 2. Object.create()******************************************************************>>>>>>>>>>>>>>
// this method creates a new object, using an existing object as the prototype of the newly created object.

// Creates PROTOTYPE OBJECT from existing O\object

// const myObj = Object.create(obj1)
// console.log(Object.create(obj1));



// 3. Object.defineProperty()******************************************************************>>>>>>>>>>>>>>
// Adds the named property described by a given descriptor to an object.

// Object.defineProperty(obj1, 'country', {value: 'India'});

// console.log(obj1);




// 4. Object.defineProperties()******************************************************************>>>>>>>>>>>>>>
// Adds the named properties described by the given descriptors to an object.

// Object.defineProperties(obj1,{
//     prop1 :{
//         value : 12,
//     },
//     prop2 : {
//         value:99
//     }
// })

// console.log(obj1);

// 5. Object.entries()******************************************************************>>>>>>>>>>>>>>
// Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.

//let entries = Object.entries(obj1); // converts objects into array
//  console.log(" Entries " + entries);

//console.log(entries[2]); //the output will be **  ['state', 'Gujarat']  **
// console.log(entries[2][1]); //the output will be ** Gujarat  **

// 6. Object.freeze()******************************************************************>>>>>>>>>>>>>>
// Freezes an object. Other code cannot delete or change its properties.

// Object.freeze(obj1);

// obj1.name = "Maher";
// console.log(obj1);

// 7. Object.fromEntries()******************************************************************>>>>>>>>>>>>>>
// Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).

// const array1 = new Map ([  ['firstName', 'Nirav'],
// ['batchNum', 42]])

// const obj = Object.fromEntries(array1);
// console.log(Object.fromEntries(array1));
// console.log(obj);

// 8. Object.getOwnPropertyDescriptor()******************************************************************>>>>>>>>>>>>>>
// Returns a property descriptor for a named property on an object.

// 9. Object.getOwnPropertyDescriptors()******************************************************************>>>>>>>>>>>>>>
// Returns an object containing all own property descriptors for an object.

// 10. Object.getOwnPropertyNames()******************************************************************>>>>>>>>>>>>>>
// Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.

// 11. Object.getOwnPropertySymbols()******************************************************************>>>>>>>>>>>>>>
// Returns an array of all symbol properties found directly upon a given object.

// 12. Object.getPrototypeOf()******************************************************************>>>>>>>>>>>>>>
// Returns the prototype (internal [[Prototype]] property) of the specified object.

// 13. Object.is()******************************************************************>>>>>>>>>>>>>>
// Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).

// 14. Object.isExtensible()******************************************************************>>>>>>>>>>>>>>
// Determines if extending of an object is allowed.

// 15. Object.isFrozen()******************************************************************>>>>>>>>>>>>>>
// Determines if an object was frozen.

// 16. Object.isSealed()******************************************************************>>>>>>>>>>>>>>
// Determines if an object is sealed.

// 17. Object.keys()******************************************************************>>>>>>>>>>>>>>
// Returns an array containing the names of all of the given object's own enumerable string properties.

// 18. Object.preventExtensions()******************************************************************>>>>>>>>>>>>>>
// Prevents any extensions of an object.

// 19. Object.seal()******************************************************************>>>>>>>>>>>>>>
// Prevents other code from deleting properties of an object.

// 20. Object.setPrototypeOf()******************************************************************>>>>>>>>>>>>>>
// Sets the object's prototype (its internal [[Prototype]] property).

// 21. Object.values()******************************************************************>>>>>>>>>>>>>>
// Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
