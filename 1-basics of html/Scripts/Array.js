//1.  using Array constructor without parameters
var student=new Array(5);
student[0]="Mike";
student[1]="Dan";
student[2]="Carol";
student[3]="Rehan";
student[4]="Julie";
//student.push("Tenzin"); //Adds new element at the end of array and extends the length of the existing array
//console.log(student.pop());// remove the last element from the array and returns it.

//console.log(student[4]);//Read element 5 of the array
//console.log(student.length);//size of array

//Read all elements in Array
/*for(var i=0;i<student.length;i++)
{
    console.log(student[i]);
}*/
// for in loop
// for (var s in student) {
//     console.log(student[s]);
// }

/*for(var i=student.length-1;i>=0;i--)
{
    console.log(student[i]);
}*/
// using Array constructor with parameters
/*var marks=new Array(1,2,3,4,5,6,7);
for (var i = 0; i < marks.length; i++) {
    console.log(marks[i]);
    
}*/
//3. using Array Notation
var associates=["a1","a2","a3","a4"];
for(var i=0;i<associates.length;i++)
{
    console.log(associates[i]);
}

//1. Activity to copy items from arr1 to arr2
//2. arrange elements of arr2 in ascending order
var arr1=[2,4,40,14,55,15,6];
var arr2=[];

function copyArr(Arr1)
{

 return Arr2;
}

function sortArr(arr)
{
    return arr
}