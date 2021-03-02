const btn= document.querySelector(".info");
const result = document.querySelector(".result");

/*here we declear the json link and kay .. we get this json from weatherstack.com */

const BASE = "http://api.weatherstack.com/current";
const KEY ="b96882e9efac702cf04e54962caf07a2";

/*here the full code */

btn.addEventListener('click', f=>{
    fetch(`${BASE}/current.json?access_key=${KEY}&q=dhaka`)
        .then(response=>response.json())
        .then(forecast=>{
            result.innerHTML= `The weather in ${forecast.location.name} is
            ${forecast.current.temp_c} degree celcius`
            
        })
})