function getPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const location = document.querySelector("#location");
  const temp = document.querySelector("#temp");
  

  const userAction = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}&units=metric`
    );
    const myJson = await response.json();
    location.innerText = myJson.name + " / " + myJson.sys.country;
    temp.innerText = myJson.main.temp + "℃" + " / " + myJson.weather[0].main;
  };
  userAction();
}

navigator.geolocation.getCurrentPosition(getPosition)