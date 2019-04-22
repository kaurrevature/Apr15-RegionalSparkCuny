function clickme(){
    alert('Hello welcome to Event handling in JS');
}
var btn=document.getElementById("btnDisplay");
//btn.addEventListener('click',display);// wiring of event with event handler
//btn.click=display();
/*function display(){
    debugger;
    //gives the value of textbox
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var displayname=document.getElementById("displayname");    
    var node=`<label>${fname} ${lname}</label>`;
    displayname.innerHTML=node;
}*/

var lname=document.getElementById("lname");// reference of the element
lname.addEventListener('change',checkForm);

function checkForm(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    if(fname==lname)
        {
            alert('first name and last name cannot be same');
        }
}  
btn.addEventListener('click',Print);// wiring of event with event handler
function Print(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById('email').value;
    var gender=document.getElementsByName('gender');
    var genderselected;
    for(var i=0; i<gender.length;i++){
        if(gender[i].checked==true)
        {
            genderselected=gender[i].value;
        }
    }
    
    alert(`${fname} ${lname} ${email} ${genderselected}`);
}