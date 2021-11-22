// console.log("Hello World");
let reg = /Hops/i;

//let reg = /Hops/g; Here the g is flag as global
//let reg = /Hops/i; Here the i is flag as Case is Insensitive


let a = "Hops healthcare is the best Hops company healthcare";
//Function to match expressions
//***************** */ 1. exec() - This function will return an array for match or null for no match

let result = reg.exec(a);
console.log(result)
// console.log(result.index)


//RESULT will be  *******************************************
//['Hops', index: 0, input: 'Hops healthcare is the best company', groups: undefined]


//**************** 2. test() returns true or false only
let reg2 = /Hops/;

let result2 = reg2.test(a)
// console.log(result2)


//**************** 3. match() returns array of and result or null
let reg3 = /company/;
//let result3 = reg.match(a) // this is wrong way
let result3 = a.match(reg3) //this is right way
// console.log(result3)




//**************** 4. search() returns index of first match else -1
let reg4 = /best/;
let result4 = a.search(reg4);
console.log(result4)


//************* 5. replace() it will returns new replaced string with all the replacement
let reg5 = /healthcare/g; //if there is no global flag is giventhan first match only replace
let result5 = a.replace(reg5 , 'slk');  // rplace where match reg
console.log(result5)











