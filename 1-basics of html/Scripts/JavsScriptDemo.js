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

//var x;
//x= 10;//"10"; //true
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
//var y="10";
//document.write(x!==y);

//Logical operators (&&, ||, !)
//var z=30;
//document.write(x==z && x==10);
//CONDITIONALS

//functions
function getMessage(firstname, lastname="test"){
    debugger;
    //return 'Hello '+firstname+' '+lastname;
    //Template literals: string extrapolation
    return `Hello ${firstname} ${lastname}`;
}
//var msg=getMessage("Pushpinder");
//alert(msg);
function calculateAge() {
    var age = 190;
    if (age >= 16 && age <= 100) {
        document.write("Congrats! You are eligible for driver's licenes");
    }
    else if (age > 100) {
        document.write("you are too old to drive. Better prepare for funeral");
    }
    else {
        document.write("Sorry! your need to grow old to apply");
    }
    document.write("<br>after if block");
}

//calculateAge(); // Call to the Javascript

//debugger;
//Taking marks as in input from the user
function getMarks() {
    var score = prompt("Enter your marks for subject JavaScript");
    return score;
}

function getGrades(score) {
    debugger;
    //declare a grade variable
    var grade;
    //specifying condition or expression looking for within the cases
    switch (true) {
        case score >= 90: //case1
        return grade = 'A';
            break; //to avoid execution of next cases
        case score >= 70 && score < 90://case2
        return  grade = 'B';
            break;
        case score >= 50 && score < 70: //case3
            return grade = 'C';
            break;
        default://default case
        return grade = 'F';
            break;
    }
}
//var marks=getMarks();//Call to function returning a value and storing in
//var grades=getGrades(marks);
//alert(grades);