let myName = prompt("Lütfen isminizi yazınız.");
let currentDate = new Date(); 

console.log(Date());

// İsim Ekleme 
document.querySelector('#myName').innerHTML = myName; 

// Saat - Dakika - Saniye Alma, DOMA'a Ekleme

function showTime () {
  document.querySelector('#myClock').innerHTML = (
    `${new Date().getHours() < 10 ? `0${new Date().getHours()}`: new Date().getHours()} 
    :${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}`: new Date().getMinutes()} 
    :${new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds()}`
  );
}
setInterval(showTime, 1000);


// Günü Saptama
let currentDay = currentDate.getDay();

// Günü Stringe Çevirme
switch (currentDay) {
  case 0:
    day = "Pazar";
    break;
  
  case 1:
    day = "Pazartesi";
    break;
  
  case 2:
    day = "Salı";
    break;
      
  case 3:
    day = "Çarşamba";
    break; 

  case 1:
    day = "Perşembe";
    break;

  case 5:
    day = "Cuma";
    break;

  case 6:
    day = "Cumartesi";
    break;  
}
// Günü DOM'a Ekleme
document.querySelector('#today').innerHTML = day;