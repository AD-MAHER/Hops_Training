function StringRev() {
  Str1 = prompt("Enter Your String to reverse : ");

  Str2 = "";

  var Arr = Str1.split(" ");
  var Str3 = Arr.reverse().join(" ");

  console.log("Word Split : " + Str3);

  for (var i = 1; i <= Str1.length; i++) {
    Str2 = Str2 + Str1[Str1.length - i];
  }

  console.log("Letter Split :" + Str2);
}

// StringRev();

// **************************************CART BOX CODE ********************************************************
function Submit() {
  for (var i = 1; i <= 3; i++) {
    var A = document.getElementById("Item" + i);
    var Valued = document.getElementById("Item" + i).value;
    if (A.checked == true) {
      document.getElementById("Rem" + i).innerHTML =
        document.getElementById("Rem" + i).innerHTML +
        "<input type='checkbox' value='" +
        Valued +
        "' id='Item" +
        i +
        "'> <label>" +
        document.getElementById("Item" + i).value +
        "</label><br>";
      document.getElementById("Sel" + i).innerHTML = " ";
    }
  }
}

function Remove() {
  for (var i = 1; i <= 3; i++) {
    var A = document.getElementById("Item" + i);
    var Valued = document.getElementById("Item" + i).value;
    if (A.checked == true) {
      document.getElementById("Sel" + i).innerHTML =
        document.getElementById("Sel" + i).innerHTML +
        "<input type='checkbox' value='" +
        Valued +
        "' id='Item" +
        i +
        "'> <label>" +
        document.getElementById("Item" + i).value +
        "</label><br>";
      document.getElementById("Rem" + i).innerHTML = " ";
    }
  }
}

//   function Add_el(){

//     let content = document.getElementById("add_txt").value;
//     let k = 3
//     document.getElementById("Sel" + (k+1) ).innerHTML = document.getElementById("Sel" + (k+1)).innerHTML +"<input type='checkbox' value='" + Valued + "' id='Item" + (k+i) + "'> <label>" + document.getElementById("Item" + i).value + "</label><br>"

//   }

//   function Add_el()

// ************************************ CLOCK CODE **********************************************

function clock() {
  var d = new Date();
  var hour = d.getHours();
  var minute = d.getMinutes();
  var seconds = d.getSeconds();

  document.getElementById("clock-data").innerHTML =
    " <em class='text-danger clk'>" +
    hour +
    "<small class='lead'>hours</small> :" +
    minute +
    "<small class='lead'>minutes</small> :" +
    seconds +
    "<small class='lead'>Seconds</small></em>";
}

setInterval(function () {
  clock();
}, 1000);

function Argu(a, b) {
  console.log(a + b + " Arguments Passed Successfully");
}

Argu(1, 0);

function Hoisting_Fun() {
  var c = 1;
  var d = 1;
  var z = 0 ;
  console.warn(z + " Hoisting_Function not working");

  z = d + c;
}

Hoisting_Fun();

var x = () => {
  var c = 1;
  var d = 2;
  console.log(c + d + " Anonymous");
};

x()(
  (function () {
    var c = 1;
    var d = 3;
    console.log(c + d + " Self Called");
  })()
);

// Unlimited Arguments Function *****************************************************

// function Amd ( ){
//   var j = 0;
//   for(var i = 0;i< arguments.length;i++){
//               j = j+arguments[i];

//   }
//   return j;

// }
// console.log(Amd(1,2,6,10));

// ********************PROGRAMS *********************

// STRING REVERSE PROGRAMM **************************

//

// let Str1 = prompt("Enter number :" )
// // let Str1 =[1,6,2,6,1];
// let Str2 = [];
// let Count = 0;

// console.log(Str1)

// for(let j = 0;j<5;j++){

//  if(!(Str1[j] == Str1[Str1.length-j-1])){
//             Count = Count + 1;

//  }

//console.log(Str1[j])
// console.log(Str1[Str1.length-j-1])

// }

// if(Count == 0){
//   console.log("Its Pan")
// }
// else{
//  console.log( "Its not pan")
// }
