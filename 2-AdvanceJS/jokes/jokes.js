//console.log('first run');
//create a constant (const is block scope like let)
const url="http://api.icndb.com/jokes/random";
//url=10; //this will give error becuse values cannot be re-asssigned
//call the getJoke on button click
var btn=document.querySelector("#new-joke-button");
//wire the event with event handler
btn.addEventListener('click',getJoke);

function getJoke(){
//1. create an object for creating Ajax Request
var xhr=new XMLHttpRequest();// AJAX object
//2. Open the request
xhr.open('GET',url,true);//3rd argument is optional true means asynchronous request

//3. write a function to handle server response gracefully
xhr.onreadystatechange= function(){
    console.log(`Ready State- ${xhr.readyState}`);
    if(xhr.readyState==4)
    {
        //JSON.parse - converts JSON string to JS object
        // JSON.stringify - converts JS object to Json string
       var data=JSON.parse(xhr.responseText);
       console.log(data);
       addJoke(data);
    }
};
//4. Send the request to server
xhr.send();//GET requests to recieve data
//xhr.send(data);//POST
}

function addJoke(data){
    var jokefield=document.querySelector("#joke-field");
    jokefield.innerHTML=data.value.joke;
}