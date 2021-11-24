// >>>>>>>>>>>>>>>>>>>>>*****************************<<<<<<<<<<<<<<<
//                  ^^^^^^^^^ OBJECT PROPERTIES ^^^^^^^^^
//********************************************************************

// var array =  ['1',2,5]

// var a = {
//     fname : 'google',
//     lname : 'doodle',
//     age : 22,
//     mail : "google@gmail.com",
//     services : ['gmail','YouTube','SearchEngine'],
//     array2 : array,
//     income : function (){
//         return  250000;
//     },

//     fullName : function(){
//         return this.fname + " " + this.lname
//     }

// }


//************************************************/

// console.log(a)
// console.log(a.age);
//  console.log(a.services[2]);
// console.log(a.income())

// console.log(a.fullName())


// ******************************************
// let keys = Object.keys(a)
// console.log(keys);  //For prints keys only of an object

// ******************************************

// let values = Object.values(a)
// console.log(values);  //For prints Values only of an object

// ******************************************
// let entries = Object.entries(a)// converts objects into array
// console.log(" Entries " + entries);
// console.log(entries[2]); //the output will be ** ['age', 22]  **
// console.log(entries[2][1]); //the output will be ** 22  **




















// >>>>>>>>>>>>>>>>>>>>>************************<<<<<<<<<<<<<<<<<<<
//                       ^^^^^^^^^ VAR ^^^^^^^^^
//****************************************************************

// var name = 1

// const name1 = name
// name = 2
// name1 = name

// console.log(name1);



// >>>>>>>>>>>>>>>>>>>>>************************<<<<<<<<<<<<<<<
//                       ^^^^^^^^^ LET ^^^^^^^^^
//************************************************************

// let city;

// function letScope(){
//     let city = "Junagadh";
//     city = "Ahmedabad"
    
//     console.log(">>>>>declared INTO the function >>>>>>" +city);
   
// }
// console.log(">>>>>declared OUT of function >>>>>>" + city);

// letScope()


// >>>>>>>>>>>>>>>>>>>>>************************<<<<<<<<<<<<<<<
//                       ^^^^^^^^ CONST ^^^^^^^^
//************************************************************



// const arr1 = [1,4,3,6,7,8]

// console.log(">>>>>>OLD ONE ARRAY " + arr1)

// arr1[2] = 99

// console.log(">>>>>>NEW ONE ARRAY " + arr1)

// arr1 = "not allowed "
// console.log(">>>>>>NEW ONE ARRAY " + arr1)



// >>>>>>>>>>>>>>>>>>>>>*****************************<<<<<<<<<<<<<<<
//        ~~~~~~~~~~~Most Common Poggramming Case type~~~~~~~~~~
//********************************************************************

// 1. camelCase  (here the every words first lwtter is capital EXCEPT FIRST WORD)
// 2. kebab-case (here the every word are JOINT BY DASH("-"))
// 3. snake_case (here the every word are JOINT BY UNDERSCORE)
// 4. Pascalcase (here the first letter of first word only is capital)
