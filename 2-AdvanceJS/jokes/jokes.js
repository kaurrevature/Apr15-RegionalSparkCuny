//console.log('first run');
//create a constant (const is block scope like let)

//JOKE API: http://www.icndb.com/api/

var url="http://api.icndb.com/jokes/random";
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
function addJokeByNum(data){
    var jokefield=document.querySelector("#new-joke-field");
    jokefield.innerHTML=data.value.joke;
}
function getJokeByNum(){    
    //get joke number for user
    var num=document.getElementById("jokenum").value;
    //customize the url
     url="http://api.icndb.com/jokes/"+num;
    console.log(url);
    //1. create an object for creating Ajax Request
    var xhr=new XMLHttpRequest();// AJAX object
    //2. Open the request
    xhr.open('GET',url,true);//3rd argument is optional true means asynchronous request
    
    //3. write a function to handle server response gracefully
    /*
0 (uninitialized) or (request not initialized)
1 (loading) or (server connection established)
2 (loaded) or (request received)
3 (interactive) or (processing request)
4 (complete) or (request finished and response is ready) */

/*
HTTP Status:
1xx-Informational
2xx- Success (200 )ok, 204 (no content) 
3xx-Redirectional
4xx-Client Side error (404) page not found
5xx-Server Error
*/
    xhr.onreadystatechange= function(){
        console.log(`Ready State- ${xhr.readyState}`);
        if(xhr.readyState==4 && xhr.status==200)
        {
            //JSON.parse - converts JSON string to JS object
            // JSON.stringify - converts JS object to Json string
           var data=JSON.parse(xhr.responseText);
           console.log(data);
           addJokeByNum(data);
        }
    };
    //Error handling of the Ajax requests
    xhr.onerror=function(error){
        console.log('oh no! some error is there '+error)
    }
    //4. Send the request to server
    xhr.send();//GET requests to recieve data
    //xhr.send(data);//POST
    }
var btn2=document.getElementById("jokeNumber");
btn2.addEventListener('click',getJokeByNum);