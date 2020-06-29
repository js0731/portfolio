const secondHand = document.querySelector('.hand-second');  
const minsHand = document.querySelector('.hand-minute');
const hourHand = document.querySelector('.hand-hour');
const ul = document.querySelector('ul');
const dateText = document.querySelector('.dateText');
const span = document.querySelectorAll('.timeText span');
const weekDay = ['禮拜日','禮拜一','禮拜二','禮拜三','禮拜四','禮拜五','禮拜六']

function setClock(){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDeg = seconds * 6;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  const minute = now.getMinutes();
  const minuteDeg = (minute / 60) * 360 + (seconds / 60 ) * 6
  minsHand.style.transform = `rotate(${minuteDeg}deg)`;

  const hour = now.getHours();
  const hourDeg = (hour / 12) * 360  + (minute/60) * 30
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  dateText.textContent = `${now.getFullYear()} 年  ${now.getMonth()} 月  ${now.getDate()} 日 ${weekDay[now.getDay()]} `
  span[0].textContent = ( hour < 10)? ('0'+ hour) : ('' + hour)
  span[2].textContent = ( minute < 10)? ('0'+ minute) : ('' + minute)
  span[4].textContent = ( seconds < 10)? ('0'+ seconds) : ('' + seconds) 
}

function setScale(){
    let li = '';
    for(let i = 1 ; i <= 60 ; i++){
        li +=  '<li></li>';
    } 
    ul.innerHTML = li
}

setScale()
setClock()
setInterval(setClock,1000);  


//補充事項
//setInterval() 設定間隔，持續執行。 
//setTimeout() 設定延遲，執行一次。
//window.requestAnimationFrame(anaimationHandler)
//function anaimationHandler(){
//  setClock()
//  window.requestAnimationFrame(anaimationHandler)
//}
//window.requestAnimationFrame(anaimationHandler)