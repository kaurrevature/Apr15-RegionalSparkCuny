 // Objects: 
 //1. Object literal Notation
 const id=123;// constants
 var name="Jivo";//variables
 
 var student={
    firstname: "Tobby",
    lastname: "Johnson",
    id:123,
    getDetails: function(){
        return `${this.id} - ${this.firstname} ${this.lastname}`;//template literal notation
    }
 }; 
 //read first name
//document.write(student.firstname);
student.firstname="Pushpinder";
student.lastname="Kaur";
student.id=456;
var details=student.getDetails();
//document.write(details);
 
//2. using Object Constructor and new keyword
var student1=new Object();
student1.id=789;
student1.firstname="fname";
student1.lastname="lname";
student1.getDetails=function(){
    return `${this.id} - ${this.firstname} ${this.lastname}`;//template literal notation
};
student1.printDetails=function(){
    document.write(student1.getDetails());
}
//student1.printDetails();

//3. create objects using function constructor
function student2(id,firstname,lastname){
    this.id=id;
    this.firstname=firstname;
    this.lastname=lastname;
    this.getDetails=function(){
        return `${this.id} - ${this.firstname} ${this.lastname}`;//template literal notation
    }
    this.printDetails=function(){
        document.write(this.getDetails());
    }
}

//create a new student
s1=new student2(987,"Carol","Baxtor");//initialize student
s1.printDetails();//call function in student

s2=new student2(345,"Tom","Cruise");
s2.printDetails();
