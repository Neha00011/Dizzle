let submit = document.getElementById("subt");
let cityname = document.getElementById("enterField");
//console.log(cityname);

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let cityName = cityname.value;
  //console.log(username);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dd054d36edc0b66b22dd6e3a1c27b498&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      //console.log(typeof data);

      //removing input field
      const list1 = document.getElementById("input-part");
      list1.removeChild(list1.firstElementChild);
      const list2 = document.getElementById("subheading");
      list2.innerHTML = "";

      //showing card
      document.getElementById("card").style.background = "purple";

      //card-content
      document.querySelector("#my-card").innerHTML = `
         "Weather Details"<br>
         cityName=${cityName},<br>
         Temparature=${data.main.temp},<br>
         TempMax=${data.main.temp_max},<br>
         TempMin=${data.main.temp_min},<br>
         feels-Like=${data.main.feels_like},<br>
         Pressure=${data.main.pressure},<br>
         Humidity=${data.main.humidity},<br>
         Wind speed=${data.wind.speed}<br>
      `;
    })
    .catch((error) => console.log(error));
});
