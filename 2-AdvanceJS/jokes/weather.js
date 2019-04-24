console.log('first run');
//function chaining 
document.getElementById('getWeather').addEventListener('click',getweather);
function getweather(){
    var city="Reston"
    var url="http://api.openweathermap.org/data/2.5/weather?q="+city+",us&units=imperial&APPID=859d47520ac736ebe8bbce1fef74269c";
    fetch(url,{
    method:'get'
    })
    .then(
        /*function(response){
            //console.log(response);
            //return response.text();
            return response.json();
        }*/
        //Arrow functions- shorthand notation of anonymous functions
        (response)=>response.json()
    )
    .then(function(data){
        addTemp(data);
    })
    .catch((error)=>alert('oh no there is an error '+error))
}
function addTemp(data){
    var div=document.getElementById('weatherDiv');
    let para=document.createElement('h3');
    let ptext=document.createTextNode(`Temperature in ${data.name} is ${data.main.temp}`);
    para.appendChild(ptext);
    div.appendChild(para);
}