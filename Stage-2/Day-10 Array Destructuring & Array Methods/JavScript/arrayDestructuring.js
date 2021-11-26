
// **************************ARRAY DESTRUCTURING******************


const arrayX = ['js','react','event-looping','ant-design','html']
let [top1,top2,top3,top4,top5] = arrayX;













var array1 = [1,22,3,4,45,0,]

var array2 = ["a","c","e","b","d"]

// **********************ARRAY MAPPING Method****************************


// const array1 = [1, 4, 9, 16];

// const map1 = array1.map(x=> x*2)
// console.log(map1);

// output: [2, 8, 18, 32]

// **********************ARRAY FILTER Method****************************

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length>6)

// console.log(result);

// //Output is : ['exuberant', 'destruction', 'present']



// **********************ARRAY Sort Method****************************

// var arraySort = array1.sort();

// console.log(arraySort);


//used to sort array values

// the output will be : ['a', 'b', 'c', 'd', 'e']

// **********************ARRAY PUSH Method****************************


// push()


// array2.push("e");



// **********************ARRAY SHIFT Method****************************


//Shift()

// array1.shift();
 
// **********************ARRAY POP Method****************************



//pop()


// array2.pop("b");

// **********************ARRAY SLICE Method****************************
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// SYNTAXES
// slice()
// slice(start)
// slice(start, end)


// console.log(array1.slice(2));
// console.log(array1.slice(2,4));
// console.log(array1);


// **********************ARRAY SPLICE Method****************************
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 2, 'Feb',4,56,7);

console.log(months);