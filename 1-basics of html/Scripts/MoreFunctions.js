//experiment with truthy and falsy
function truthyFalsy(x) {
    if (x) {
        console.log(x + " is truthy");
    } else {
        console.log(x + " is falsy");
    }
}

function largestOfThree(a, b, c) {
    //check whether input is of type number
    //evaluate whether the conversion to number fails for 
    //ANY of the inputs
    //if so, return NaN and exit the function
    if (isNaN(Number(a)) || isNaN(Number(b)) || isNaN(Number(c))) {
        return NaN; //exit function with value NaN
    }
    //ok, so now we can actually do the comparison!
    //only way we can get to this point in the function
    //is if the if-statement condition if not satisfied
    //(could also use an else block)

    //problem - what if a and b are equal and larger than c?
    /*
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
    */
    //another approach
    let largest = a;

    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }
    //notice the pattern!
    //moving through other values and comparing each one to 'largest'
    //if current value is larger than 'largest', set it as 'largest'

    return largest;
}

function largestInArray(numArray) {
    let largest = numArray[0];
    for (i = 1; i < numArray.length; i++) {
        if (numArray[i] > largest) {
            largest = numArray[i];
        }
    }
    return largest;
    //use a loop to find largest value
}

//without recursion
function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }
//with recursion
function fibonacci(num) {
    if (num <= 1) return 1;  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

console.log(fibonacci(2));

function stringtoCharArr(str) {
    let char1 = [];
    for (let i = 0; i < str.length; i++) {
        //check if string has punctuations
        if (str[i] != '\' ' && str[i] != " " && str[i] != ',' && str[i] != '.') {
            char1.push(str[i].toLowerCase());
        }
    }
    console.log(char1.toString());//to test if string get rid of punctuations
    return char1;
}
function reverseStringtoCharArr(str) {
    let char2 = [];

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] != '\' ' && str[i] != " " && str[i] != ',' && str[i] != '.') {
            char2.push(str[i].toLowerCase());
        }
    }
    console.log(char2.toString());// print the reverse of string.
    return char2;
}
function palindrome(str) {
    let char1 = [];
    let char2 = [];
    var isPalindrome=false;
    var falseCounter=0;
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
    if(falseCounter>0)
        isPalindrome=false;    
    return isPalindrome;
}
console.log(palindrome('A man, a plan, a canal. Panama'));