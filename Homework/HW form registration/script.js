function redirectToProfile() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const fullName = document.getElementById('fullName').value;

    
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

// Виконати валідацію полів
const emailRegex = /^.{5,}@.*\..*$/;
const phoneRegex = /^[+\d()-]{10,13}$/;
const nameRegex = /^[A-Z][a-zA-Z]*\s[A-Z][a-zA-Z]*\s[A-Z][a-zA-Z]*$/;

if (!emailRegex.test(email)) {
    alert('Введіть коректний email');
    return;
  } else if (!phoneRegex.test(phone)){
    alert('Введіть правильний номер телефону у форматі +1(123)456 78 90');
    return;
  } else if (!nameRegex.test(fullName)) {
    alert('введіть повністю ПІБ з заглавної букви');
    return;
  }




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

// Підключення необхідних елементів DOM
var productInfo = document.getElementById('product-info');
var buyButton = document.getElementById('buy-button');
var orderForm = document.getElementById('order-form');
var orderSummary = document.getElementById('order-summary');
var productSummary = document.getElementById('product-summary');
var deliverySummary = document.getElementById('delivery-summary');

// Слухач події натискання кнопки "Купити"
buyButton.addEventListener('click', function() {
  // Приховування інформації про товар та відображення форми оформлення замовлення
  productInfo.style.display = 'none';
  orderForm.style.display = 'block';
});

// Слухач події відправки форми
orderForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Зупинка перезавантаження сторінки

  // Перевірка валідності даних форми
  if (validateOrderForm()) {
    // Відображення інформації про замовлення
    displayOrderSummary();
  } else {
    alert('Будь ласка, заповніть всі обов\'язкові поля форми!');
  }
});

// Функція для перевірки валідності даних форми
function validateOrderForm() {
  var name = document.getElementById('name').value;
  var city = document.getElementById('city').value;
  var novaPoshta = document.getElementById('nova-poshta').value;
  var paymentMethod = document.getElementById('payment-method').value;
  var quantity = document.getElementById('quantity').value;

  if (name === '' || city === '' || novaPoshta === '' || paymentMethod === '' || quantity === '') {
    return false;
  }

  return true;
}

// Функція для відображення інформації про замовлення
function displayOrderSummary() {
  // Отримання інформації з форми та інші необхідні дії
  var productName = 'Назва товару'; // Замінити на реальні дані товару
  var deliveryInfo = 'Інформація про доставку'; // Замінити на реальну інформацію про доставку

  // Відображення інформації про замовлення
  productSummary.textContent = 'Товар: ' + productName;
  deliverySummary.textContent = 'Доставка: ' + deliveryInfo;

  // Приховування форми оформлення замовлення та відображення інформації про замовлення
  orderForm.style.display = 'none';
  orderSummary.style.display = 'block';
}
