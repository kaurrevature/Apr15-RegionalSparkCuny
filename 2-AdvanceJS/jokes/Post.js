console.log('first run');

var url="https://jsonplaceholder.typicode.com/posts";

document.querySelector("#GetPosts").addEventListener('click',getPosts);
document.querySelector("#SendPosts").addEventListener('click',SendPosts);

function getPosts(){

    fetch(url,{
        method:'Get'
    })
    .then((res)=>res.json())
    .then((data)=>updateDOM(data))
}

function SendPosts(){
var title= document.getElementById('title').value;
var body= document.getElementById('body').value;

    fetch(url,{
        method:'Post',
        headers:{
          'Accept':'application/json application/xml',
          'Content-type':'application/json'
        },
        body: JSON.stringify({title:title,body:body})
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}
function updateDOM(data){
    debugger;
    var div=document.getElementById('post');
    let output="";
    data.forEach(post => {
        output += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        });
    div.innerHTML=output;
}