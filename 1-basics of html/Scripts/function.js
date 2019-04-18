//Functions 
//Create 3 functions that adds 2 numbers:
//1. without parameter and of void type (alert for result)
var a = 10;
var b = 30;
var result;
function Add1() {
    result = a + b;
    alert(result);
}
//Call Add1()
//Add1();
//2. with parameter and void type (alert for result)
function Add2(x,y){
    result=x+y;
    alert(result);
}
function Add3(c,d){
    result=c+d;
    return result;
}
var output=Add3(70,8);
alert(output);
//Add1();
//Add2(a,b);
//Add2(60,20);
