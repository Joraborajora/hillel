// {"coord":{"lon":24.0232,"lat":49.8383},
// "weather":[{"id":803,"main":"Clouds",
// "description":"broken clouds","icon":"04n"}],
// "base":"stations",
// "main":{"temp":17.66,"feels_like":17.65,"temp_min":17.66,
// "temp_max":17.66,"pressure":1006,"humidity":83,"sea_level":1006,
// "grnd_level":973},"visibility":10000,"wind":{"speed":3.15,
// "deg":191,"gust":7.38},"clouds":{"all":80},"dt":1690240253,
// "sys":{"country":"UA","sunrise":1690253014,"sunset":1690309018},
// "timezone":10800,"id":702550,"name":"Lviv","cod":200}

document.addEventListener("DOMContentLoaded", function() {
     fetch("http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19")
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Помилка при отриманні погоди.');
            }
            return response.json();
        })
        .then(function(data) {
            let temperature = data.main.temp;
            let pressure = data.main.pressure;
            let description = data.weather[0].description;
            let humidity = data.main.humidity;
            let windSpeed = data.wind.speed;
            let windDirection = data.wind.deg;
            let iconCode = data.weather[0].icon;
            let nameCity = data.name;

            let weatherHtml = '<p>Місто: ' + nameCity + '</p>';
            weatherHtml += '<p>Температура: ' + temperature + ' &deg;C</p>';
            weatherHtml += '<p>Тиск: ' + pressure + ' hPa</p>';
            weatherHtml += '<p>Опис: ' + description + '</p>';
            weatherHtml += '<p>Вологість: ' + humidity + ' %</p>';
            weatherHtml += '<p>Швидкість вітру: ' + windSpeed + ' м/с</p>';
            weatherHtml += '<p>Напрям вітру: ' + windDirection + ' &deg;</p>';
            weatherHtml += '<img src="http://openweathermap.org/img/w/' + iconCode + '.png" alt="weather icon">';

            document.getElementById('weather').innerHTML = weatherHtml;
        })
        .catch(function(error) {
            document.getElementById('weather').innerHTML = '<p>' + error.message + '</p>';
        });
});