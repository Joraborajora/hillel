/* выполняем условие, если пользовател отказался, то выводится соответвующее сообщение, иначе выполняется задача */

const year = prompt("Введіть рік свого народження:");
if (year === null ){
 alert("Шкода, що Ви не захотіли ввести свій рік народження."); 
} else {

const from = prompt("В якому місті живете?");
if (from === null){
alert("Шкода, що Ви не захотіли ввести своє місто.");
} else {

const sport = prompt("Який ваш улюблений вид спорту?");
if (sport === null){
 alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
} else {

/* вычисляем возраст или таким актуальным способом 
let yearsNow = new Date().getFullYear();
let age = yearsNow - year; */

let age = 2023 - year; 
let messageCity;

/* умови міста чи країни та вивід повідомлення 
 при вводе пользователем слово - преобразуем в слово где первая буква большая, а остальные маленькие */

const city = from[0].toUpperCase() + from.toLowerCase().substring(1);
const favoriteSport = sport[0].toUpperCase() + sport.toLowerCase().substring(1);

if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
   messageCity = `Ти живеш у столиці ${getCountry(city)}.\n`; 
}  else {
  messageCity = `Ти живеш у місті ${city}.\n`; 
}

/* друга частина */

switch (favoriteSport) {
        case "Футбол":
          favorite = "Круто! Хочеш стати як Девід Бекхам?";
          break;
        case "Теніс":
          favorite = "Круто! Хочеш стати як Сергій Стаховський?";
          break;
        case "Баскетбол":
          favorite = "Круто! Хочеш стати як Майкл Джордан?";
          break;
        default:
          favorite = "Цікавий вибір спорту!";
      }
alert(`Ваш вік: ${age}\n${messageCity} ${favorite}`);
}
}
}

function getCountry(city) {
  switch (city) {
    case "Київ":
      return "України";
    case "Вашингтон":
      return "США";
    case "Лондон":
      return "Великої Британії";
    default:
      return "";
  }
}
