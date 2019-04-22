function clickme(){
    alert('Hello welcome to Event handling in JS');
}
var btn=document.getElementById("btnDisplay");
btn.addEventListener('click',display);// wirirng of event with event handler
//btn.onclick=display();
function display(){
    debugger;
    var fname=document.getElementById("fname").value;
    alert(fname);
}

