//single line comment
/* multi line Comment */

//@author: Pushpinder Kaur
//alert('Hello World!!');//Testing my JavaScript program

//VARIABLES
//var a;//declaration
//a=10;//assignment or initialization
//alert(a);//pop-up
//console.log(a);//display value on console of developer tools
//document.write(a);//displays value on page

var x;
x= 10;//"10"; //true
//document.write(typeof(x));

//OPERATORS: 
//document.write(x);
//1. Arithmatic (+,-,*,/, %, ++,--)
//x++; //x=x+1;  //post increment
//++x;//pre-increment
//x--;
//document.write(++x); // pre-increment (The value is incremented and then read after)
//document.write(x++); // post-increment (The value is read first and incremented after)
//document.write(x);

//Comparison (==, ===, !=, <, >, <=, >=)
var y="10";
//document.write(x!==y);

//Logical operators (&&, ||, !)
var z=30;
//document.write(x==z && x==10);

//CONDITIONALS
var age=190;
if(age>=16 && age <=100){
    document.write("Congrats! You are eligible for driver's licenes");
}
else if(age>100){
    document.write("you are too old to drive. Better prepare for funeral");
}
else{
    document.write("Sorry! your need to grow old to apply");
}
document.write("<br>after if block");
