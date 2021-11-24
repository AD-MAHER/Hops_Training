var array1 = [1,22,3,4,45,0,]

var array2 = ["a","c","e","b","d"]


console.log("array1 = " + array1);
console.log("array2 = " + array2);


console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


// console.log(array);


//1. Join()

// var arrayJoint = array1.join( " A ")
// console.log(arrayJoint);


// the output will be : 1 A 2 A 3 A 4 A 4 5

//2.   sort()

// var arraySort = array1.sort();

// console.log(arraySort);


//used to sort array values

// the output will be : ['a', 'b', 'c', 'd', 'e']


//3. push()


// array2.push("e");
// the output will be : 




//5. Shift()
// array1.shift();

// the output will be : 

//6. pop()


// array2.pop("b");



//7. Array.isArray(array_name)  retuens  boolean value
// var b =Array.isArray(array1)

// console.log(b);  //output will be true or false


// 8.forEach()  AUTOMATIVS PAS THE LOOP WITH EACH ELEMENTS
// array1.forEach(item=>{
//     console.log(item);
// })

//9. INCLUDES()   It retruns always boolean values
//console.log(array1.includes(22)); //==false
//console.log(array1.includes(22)); //==true  //checks the values is present or not


//10. filter()  //its check the elemets passes the condition or not
       //filter always returns new array with true condition


//console.log("filter()  " + array1.filter(num=>num>3)); //its will gives new array that fullfil condion
// console.log("filter()  " + array1.filter(function (num) {
// return num>3
// }))   We can also write this



// ****** filter vs arraymap******

// 1. filter = returns new array with true or fullfill condition

// 2. arrayMap = returns old array byy modifying with true or fullfill condition


//*********************************


//11.   ArrayMap()   // its check the elemets passes the condition or not
//arrayMap always returns modifies array with fullfill condition


 //console.log(array1.map(num =>{return num>3?num+3:num }));


// console.log(array1.map(function(num){
//     if(num>3){
//      return num+3
     
//     }
//     else{
//         return num
//     }
// }));
// console.log(array2.map(num => num+1));

//12.-
