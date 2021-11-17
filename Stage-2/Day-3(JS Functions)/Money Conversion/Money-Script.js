function hundred() {
  numArr1 = [
    " Zero ",
    " One ",
    " Two ",
    " Three ",
    " Four ",
    " Five ",
    " Six ",
    " Seven ",
    " Eight ",
    " Nine ",
  ];
  numArr2 = [
    "Eleven ",
    "Twelve ",
    "Thirteen ",
    "Fourteen ",
    "Fifteen ",
    "Sixteen ",
    "Seventeen ",
    "Eighteen ",
    "Nineteen ",
    "Twenty ",
  ];
  numArr3 = [
    "Ten ",
    "Twenty ",
    "Thirty ",
    "Fourty ",
    "Fifty ",
    "Sixty ",
    "Seventy ",
    "Eighty ",
    "Ninenty ",
    "Hundreed ",
  ];

  var num = 1123576
//   prompt("Enter Value for convert : ")

  var str1 = "";
  var array = num.toString().split("");
  array.forEach(function (item) {
 
  });

  if(array.length == 7){

   
    if (array[0] == 0) {
        str1 = str1 + numArr3[0] ;
      } else if (array[0] == 1 && array[1] == 1 ) {
        str1 = str1 + numArr2[0] + "Lacs " ;
        array.splice(0 , 1)
      } else if (array[0] == 2) {
        str1 = str1 + numArr3[1];
      } else if (array[0] == 3) {
        str1 = str1 + numArr3[2];
      } else if (array[0] == 4) {
        str1 = str1 + numArr3[3] ;
      } else if (array[0] == 5) {
        str1 = str1 + numArr3[4];
      } else if (array[0] == 6) {
        str1 = str1 + numArr3[5] ;
      } else if (array[0] == 7) {
        str1 = str1 + numArr3[6] ;
      } else if (array[0] == 8) {
        str1 = str1 + numArr3[7];
      } else if (array[0] == 9) {
        str1 = str1 + numArr3[8] ;
      }

      array.splice(0 , 1)
    }



if(array.length == 6){

    if (array[0] == 1) {
        str1 = str1 + numArr1[1] +  "Lacs ";
      } else if (array[0] == 2) {
        str1 = str1 + numArr1[2] + "Lacs ";
      } else if (array[0] == 3) {
        str1 = str1 + numArr1[3] +  "Lacs ";
      } else if (array[0] == 4) {
        str1 = str1 + numArr1[4] +  "Lacs ";
      } else if (array[0] == 5) {
        str1 = str1 + numArr1[5] + "Lacs ";
      } else if (array[0] == 6) {
        str1 = str1 + numArr1[6] +  "Lacs ";
      } else if (array[0] == 7) {
        str1 = str1 + numArr1[7] +  "Lacs ";
      } else if (array[0] == 8) {
        str1 = str1 + numArr1[8] + "Lacs ";
      } else if (array[0] == 9) {
        str1 = str1 + numArr1[9] +  "Lacs ";
      }
      array.splice(0 , 1)
}
if(array.length == 5){

   
    if (array[0] == 0) {
        str1 = str1 + numArr3[0] ;
      } else if (array[0] == 1) {
        str1 = str1 + numArr3[1]  ;
      } else if (array[0] == 2) {
        str1 = str1 + numArr3[1];
      } else if (array[0] == 3) {
        str1 = str1 + numArr3[2];
      } else if (array[0] == 4) {
        str1 = str1 + numArr3[3] ;
      } else if (array[0] == 5) {
        str1 = str1 + numArr3[4];
      } else if (array[0] == 6) {
        str1 = str1 + numArr3[5] ;
      } else if (array[0] == 7) {
        str1 = str1 + numArr3[6] ;
      } else if (array[0] == 8) {
        str1 = str1 + numArr3[7];
      } else if (array[0] == 9) {
        str1 = str1 + numArr3[8] ;
      }

      array.splice(0 , 1)
    }



if(array.length == 4){

    if (array[0] == 1) {
        str1 = str1 + numArr1[1] +  "Thousand ";
      } else if (array[0] == 2) {
        str1 = str1 + numArr1[2] + "Thousand ";
      } else if (array[0] == 3) {
        str1 = str1 + numArr1[3] +  "Thousand ";
      } else if (array[0] == 4) {
        str1 = str1 + numArr1[4] +  "Thousand ";
      } else if (array[0] == 5) {
        str1 = str1 + numArr1[5] + "Thousand ";
      } else if (array[0] == 6) {
        str1 = str1 + numArr1[6] +  "Thousand ";
      } else if (array[0] == 7) {
        str1 = str1 + numArr1[7] +  "Thousand ";
      } else if (array[0] == 8) {
        str1 = str1 + numArr1[8] + "Thousand ";
      } else if (array[0] == 9) {
        str1 = str1 + numArr1[9] +  "Thousand ";
      }
      array.splice(0 , 1)
}


if(array.length == 3){
    
      if (array[0] == 0) {
        str1 = str1 + numArr1[0] + numArr3[9] + "And ";
      } else if (array[0] == 1) {
        str1 = str1 + numArr1[1] + numArr3[9] + "And ";
      } else if (array[0] == 2) {
        str1 = str1 + numArr1[2] + numArr3[9] + "And ";
      } else if (array[0] == 3) {
        str1 = str1 + numArr1[3] + numArr3[9] + "And ";
      } else if (array[0] == 4) {
        str1 = str1 + numArr1[4] + numArr3[9] + "And ";
      } else if (array[0] == 5) {
        str1 = str1 + numArr1[5] + numArr3[9] + "And ";
      } else if (array[0] == 6) {
        str1 = str1 + numArr1[6] + numArr3[9] + "And ";
      } else if (array[0] == 7) {
        str1 = str1 + numArr1[7] + numArr3[9] + "And ";
      } else if (array[0] == 8) {
        str1 = str1 + numArr1[8] + numArr3[9] + "And ";
      } else if (array[0] == 9) {
        str1 = str1 + numArr1[9] + numArr3[9] + "And ";
      }
      array.splice(0 , 1)
    } 
    
if(array.length == 2) {
      if(array[0] == 0){
          str1 = str1 +  numArr3[0]
      } else if(array[0] == 1){
          str1 = str1 + numArr3[1]
      } else if (array[0] == 2) {
        str1 = str1 + numArr3[1] ;
      } else if (array[0] == 3) {
        str1 = str1 + numArr3[2];
      } else if (array[0] == 4) {
        str1 = str1 + numArr3[3] ;
      } else if (array[0] == 5) {
        str1 = str1 + numArr3[4];
      } else if (array[0] == 6) {
        str1 = str1 + numArr3[5] ;
      } else if (array[0] == 7) {
        str1 = str1 + numArr3[6];
      } else if (array[0] == 8) {
        str1 = str1 + numArr3[7];
      } else if (array[0] == 9) {
        str1 = str1 + numArr3[8] ;
      }
      array.splice(0 , 1)
    } 

if (array.length == 1) {
      if (array[0] == 1) {
        str1 = str1 + numArr1[1];
      } else if (array[0] == 2) {
        str1 = str1 + numArr1[2];
      } else if (array[0] == 3) {
        str1 = str1 + numArr1[3];
      } else if (array[0] == 4) {
        str1 = str1 + numArr1[4];
      } else if (array[0] == 5) {
        str1 = str1 + numArr1[5];
      } else if (array[0] == 6) {
        str1 = str1 + numArr1[6];
      } else if (array[0] == 7) {
        str1 = str1 + numArr1[7];
      } else if (array[0] == 8) {
        str1 = str1 + numArr1[8];
      } else if (array[0] == 9) {
        str1 = str1 + numArr1[9];
      }
    
    }
  

  console.log(str1 + "Rupees Only");

}


hundred();

