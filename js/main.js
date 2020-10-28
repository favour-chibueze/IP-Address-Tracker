// let response = await fetch('https://geo.ipify.org/api/v1?apiKey=at_9RuOlK9rHP8UnLuBorAzEZ96vTyMM&ipAddress=8.8.8.8');
// let res = await response.json();
// console.log(res)


// const getData = () => fetch('https://geo.ipify.org/api/v1?apiKey=at_9RuOlK9rHP8UnLuBorAzEZ96vTyMM&ipAddress=8.8.8.8').then(response => response.json()).then(({results}) => results);

async function getData() {
    fetch('https://geo.ipify.org/api/v1?apiKey=at_9RuOlK9rHP8UnLuBorAzEZ96vTyMM&ipAddress=8.8.8.8')
    .then(response => {
    return response.json();
    }).then(data_from_fetched => {
    let data = data_from_fetched;
    console.log(data)
    document.querySelector('#ip_text').textContent = data.ip
    document.querySelector('#location').textContent = data.location.country
    document.querySelector('#timezone').textContent = data.location.timezone
    document.querySelector('#isp').textContent = data.isp
    })
    
}
   
let data= getData();
console.log(data)

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=sk.eyJ1IjoiZmF2b3VyY2hpIiwiYSI6ImNrZ3N6andnazBxMXQydGt5YjI2ZXI0dTUifQ.KN_671QPyPqmXA7kqbpJpw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoiZmF2b3VyY2hpIiwiYSI6ImNrZ3N6andnazBxMXQydGt5YjI2ZXI0dTUifQ.KN_671QPyPqmXA7kqbpJpw'
}).addTo(mymap);