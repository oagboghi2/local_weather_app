var url = 'https://fcc-weather-api.glitch.me/api/current?lat=19&lon=35';

var btn = document.querySelector(".btn");
var con = document.querySelector(".con");
var body = document.querySelector(".bg-img")

btn.addEventListener('click', ()=>{
  fetch(url)
  .then(handleError)
  .then(function(res){
    console.log("PARSING");
    return res.json();
}).then(function(data){
  console.log(data);
  return data;
}).then(updateInfo)
  .then(backGroundDisp)
  .catch(function(error){
  console.log(error);
  });
});

function updateInfo(data){
  console.log("UPDATE INFO");
  document.querySelector("#temp").innerText=data.main.temp;
  document.querySelector("#location").innerText=data.name;
  document.querySelector("#desc").innerText=data.weather[0].description;
  return data;
}

function backGroundDisp(data){
  console.log("BG");
  if(data.weather[0].description === "clear sky"){
    body.background = 'http://www.textures.wpgallery.com/images/almost-clear-sky-texture-for-2200x1463-40-210.jpg'
  }else if(data.weather[0].description === "broken clouds"){
    body.background = 'http://www.sgsweather.com/Images/Glossary1/Fractus%20clouds.jpg'
  }else{
    body.background = white;
  }
return data;
}

function handleError(request){
    if(!request.ok){
      throw Error(request.status);
    }
    return request;
}

con.addEventListener('click', ()=>{
  console.log(document.querySelector("#temp").innerText);
  var fah = (document.querySelector("#temp").innerText * 9)/5 + 32;
  console.log(fah);
  document.querySelector("#temp").innerText = fah;
})
