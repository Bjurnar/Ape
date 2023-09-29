const apiUrl = 'https://api.met.no/weatherapi/sunrise/3.0/sun?lat=59.933333&lon=10.716667&date=2023-09-19&offset=+01:00';

// Use the fetch() method to make a GET request to the API
fetch(apiUrl)
    .then(response => {
        // Check if the response status is OK (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Work with the JSON data here
        console.log(data);
        document.querySelector("#body").textContent = data.properties.sunrise.time
        document.querySelector("#body2").textContent = data.properties.sunset.time
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    });


const apiUrl2 = 'https://api.met.no/weatherapi/sunrise/3.0/moon?lat=59.933333&lon=10.716667&date=2023-09-19&offset=+01:00';

// Use the fetch() method to make a GET request to the API
fetch(apiUrl2)
    .then(response => {
        // Check if the response status is OK (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
    })
    .then(data => {
        // Work with the JSON data here
        console.log(data);
        document.querySelector("#body3").textContent = data.properties.moonrise.time
        document.querySelector("#body4").textContent = data.properties.moonset.time
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    });


// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "";

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime =
        hour +
        ":" +
        min +
        ":" +
        sec +
        am_pm;

    // Displaying the time
    document.getElementById(
        "clock"
    ).innerHTML = currentTime;
}

showTime();

document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("myAudio");
  audio.play();
});

