
var num1;
var num2;
var result=0;
function getOperand1()
{
  num1=Number(document.getElementById("num1").value);
   return num1
}
function getOperand2(){
    num2= Number(document.getElementById("num2").value);
    return num2;
}
function Add(){
    debugger;
    var a=getOperand1();
   console.log(a);
    var b=getOperand2();
    result=a+b;
    printResult(result);
}
function printResult(res){
    debugger;
    var p=document.getElementById("result");
    var ptext=document.createTextNode(res);
    p.appendChild(ptext);
}
