let button = document.querySelector("button");
let input = document .querySelector("input");
let form= document.querySelector("form");
let h1 = document.querySelector("h1");
let h2 =document.querySelector("h2");
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let p = document.getElementById("partly");
let image = document.querySelector("img");
let humidity = document.getElementById("humidity");
let temp = document.getElementById("temp_f");
let wind = document.getElementById("windy");
let wind_dr= document.getElementById("wind_dr");
let backimage = document.querySelector(".back-image")
console.log(backimage);


form.addEventListener("submit" , fetchData)

async function fetchData(e){
    e.preventDefault()
    let response = await fetch(`http://api.weatherstack.com/current?access_key=e05bf2491491bd21015761ea92ad3af4&query=${input.value}`)
    let data = await response.json()
console.log(data)
  if(data.success===false)
  {
    window.alert("Enter Real City Name")
  }
  else{
    
    let degree= data.current.temperature;
    let cityName = data.location.name;
    let localtime  = data.location.localtime;
    let icons = data.current.weather_icons[0]
    let hum = data.current.humidity;
    let des = data.current.weather_descriptions[0];
    let wind_degri = data.current.wind_degree;
    let cloud = data.current.cloudcover;
    let wdirection = data.current.wind_dir;

   h1.innerHTML=`<h1>${degree}&#8451</h1>`
    h2.innerText = cityName;
    h3.innerText = localtime;
  
    image.setAttribute("src", icons)
    humidity.innerText = hum; 
    wind.innerText = wind_degri; 
    p.innerText=des;
    temp.innerText=cloud;
    wind_dr.innerText = wdirection;
    // console.log(p);


    // if(degree>20){
    //     backimage.style.backgroundImage="url(snow-covering-branches.jpg)"
    // }else{

    // }

  }

form.reset();
}