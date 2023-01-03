
let str="madam";
let rev="";
  for (let i=str.length-1;i>=0;i--){
      rev=rev+str[i];
  }
 if(rev==str){
     console.log("palindrome");
 }
 else{
     console.log("Not palindrome");
 }