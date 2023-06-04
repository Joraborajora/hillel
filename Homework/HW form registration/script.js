function redirectToProfile() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    document.getElementById("loader").style.display = "block";
    setTimeout(function() {
        window.location.href = "my_profile_page.html";
    }, 2000);
}

function goBack() {
    window.location.href = "login_page.html";
}
function getScreenSize() {
    console.log(`Screen size: ${window.innerWidth} + ${window.innerHeight}`);
}


// для отримання поточної локації користувача:

function getAddress() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
}

// якщо локацію користувача вдалося отримати:

function successCallback(position) {
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    geocoder.geocode({ 'latLng': latlng }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          console.log("Address: " + results[0].formatted_address);
        } else {
          console.log("No results found.");
        }
      } else {
        console.log("Geocoder failed due to: " + status);
      }
    });
  }

//   якщо отримати локацію користувача не вдалося або користувач 
//    відмовився надати доступ до своєї локації:

function errorCallback(error) {
    console.log("Error getting geolocation: " + error.message);
  }