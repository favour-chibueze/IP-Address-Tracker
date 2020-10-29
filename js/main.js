function mapLocator(lat, lng) {
  var map = L.map("mapid").setView([lat, lng], 11);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiZmF2b3VyY2hpIiwiYSI6ImNrZ3Q5Zm8wZTBjZHcycG5hN2k4em50eHEifQ.t7rgV4kp796fgZUxTU7IIA",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "sk.eyJ1IjoiZmF2b3VyY2hpIiwiYSI6ImNrZ3Q5Zm8wZTBjZHcycG5hN2k4em50eHEifQ.t7rgV4kp796fgZUxTU7IIA",
    }
  ).addTo(map);
    L.marker([lat, lng]).addTo(map);
}

async function getData(ipAddress) {
  fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_9RuOlK9rHP8UnLuBorAzEZ96vTyMM&ipAddress=${ipAddress}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data_from_fetched) => {
      let data = data_from_fetched;
      let lat = data.location.lat;
      let lng = data.location.lng;
      document.querySelector("#ip_text").textContent = data.ip;
      document.querySelector("#location").textContent =
        data.location.city + "," + data.location.region;
      document.querySelector("#timezone").textContent =
        "UTC" + " " + data.location.timezone;
      document.querySelector("#isp").textContent = data.isp;
      mapLocator(lat, lng);
    });
}

let ipAddress = '8.8.8.8';

fetch('https://api.ipify.org/?format=json') .then(response => response.json()) 
  .then(data => {ipAddress = data.ip;
    getData(ipAddress)
  })
  // .catch(error => {
  //   alert("Error!!")
  // });

  document.getElementById("fetch_btn").addEventListener("click", function () {
    ipAddress = document.getElementById("search").value;
    getData(ipAddress);
    // alert("Hello! I am an alert box!!");
  });