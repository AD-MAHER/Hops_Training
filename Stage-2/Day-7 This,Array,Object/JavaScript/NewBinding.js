
//  Function without Return



function amd(name , batch){

    var x =2;
    console.log("main value"+ x);
    this.name = name;
    this.batch = batch;


    
     
       this.work = function(){
 console.log("'.Work Function without Return ' is Worked");
 
 
//  xyz( )
//  function xyz( ){
//   console.log(this);  //its will returns the window object
//  }
       }


      //  return this
  }

// var xyz = {} its called OBJECT Litterel (BY Default value returns the OBJECT)

  function class1(){
this.x=3
console.log("value overided by another function "+ x);

  }
  class1()
var amd1 = new amd('Ajay' , '2021') 


var amd2 = new amd('Tejas' , '2022') 


amd1.batch = 'Blockchain';
 console.log(amd1) 
 console.log(amd2)


amd2.work()

 //Function with Return



 function hops(){
     return{
         type:"Function",
         argu:"with Return",
     }
 }

var hopsConstruct = new hops();
console.log(hopsConstruct);



