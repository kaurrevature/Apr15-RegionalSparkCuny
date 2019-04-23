//Functions 
//Create 3 functions that adds 2 numbers:
//1. without parameter and of void type (alert for result)
var a = 10;//GLOBAL Variables
var b = 30;
var result;
function Add1() {
    result = a + b;
    alert(result);
}
//Call Add1()
//Add1();
//2. with parameter and void type (alert for result)
function Add2(x, y) {
    result = x + y;
    alert(result);
}
function Add3(c, d) {
    result = c + d;
    return result;
}
var output = Add3(70, 8);
//alert(output);
//Add1();
//Add2(a,b);
//Add2(60,20);
function takeNumber() {
    var number = prompt("Enter the number to check if its even");
    return number;
}

function isEvenOrOdd(takeNumber)//callback function
{
    var num = takeNumber();
    if (num % 2 == 0)
        return "even"
    else
        return "odd";
}
//console.log(isEvenOrOdd(takeNumber));

//Recursion
//Print reverse of numbers
function printReverse(num) {
    //using recursion

    // document.write(num);
    // if(num>0)
    //     printReverse(num-1);
    debugger;
    //using while
    // while(num>0){
    //     document.writeln(num);
    //     num--;
    // }
    // do{
    //     document.writeln(num);
    //     num--;
    // }
    // while(num>0);

    for (i = num; i <= num; i--) {
        document.write(i);
        if (i <= 0)
            break;
    }
}
//printReverse(5);
//Print n natural numbers
function printNaturalNumbers(limit) {
    for (var i = 1; i <= limit; i++)//block/local scope
    {
        //j=20; // global variable without var keyword
        //document.write(i);
    }
}
//Global variables: variables created outside function, or without var keyword
//printNaturalNumbers(5);
//document.write(j);
//Scope: life time of a variable
//document.write(i);//global variable

//Anonymous functions: without any name
// var afunc= function(){
//     alert('Hi Calling from anonymous function');
// }
//afunc();
//Self-invoked functions: afunction which declared and called immediately by itself
// (function(){
//     alert('Hi Calling from anonymous function');
// })();
//anonymous and self invoked function with a parameter
// (function(a,b){
//     alert(`Sum of ${a} and ${b} is ${a+b}`);
// })(5,10);

var numArr = [10, 56, 76, 98, 82, 45, 98];
function largestInArray(numArray) {
    var largest = numArray[0];
    for (i = 1; i < numArray.length; i++) {
        if (numArray[i] > largest) {
            largest = numArray[i];
        }
    }
    return largest;
    //use a loop to find largest value
}

var result = largestInArray(numArr);
//alert(result);

function stringtoCharArr(str) {
    debugger;
    let char1 = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ' && str[i] != " " && str[i] != ',' && str[i] != '.') {
            char1.push(str[i].toLowerCase());
        }
    }
    console.log(char1.toString());
    return char1;
}
function reverseStringtoCharArr(str) {
    debugger;
    let char2 = [];

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] != ' ' && str[i] != " " && str[i] != ',' && str[i] != '.') {
            char2.push(str[i].toLowerCase());
        }
    }
    console.log(char2.toString());
    return char2;
}
function palindrome(str) {
    let char1 = [];
    let char2 = [];
    isPalindrome=false;
    falseCounter=0;
    char1 = stringtoCharArr(str);
    char2 = reverseStringtoCharArr(str);
    debugger;
    if (char1.length == char2.length) {
        for (let i = 0; i < char1.length; i++) {
            for (let j = 0; j < char2.length; j++) {
                if(char1[i]==char2[j])
                {
                    isPalindrome=true;
                }   
                else {
                    isPalindrome=false;
                    falseCounter++;
                }             
            }
            
        }
    }
    if(false>0)
    isPalindrome=false;    
    return isPalindrome;
}


console.log(palindrome('A man, a plan, a canal. Panama'));

//https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e

//https://medium.freecodecamp.org/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7