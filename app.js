const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2023, 4, 16, 0, 0 , 1);
const year = futureDate.getFullYear();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
let month = futureDate.getMonth();
month = months[month];
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
giveaway.textContent = `date of your next birthday: ${weekday}, ${date} ${month} ${year} ${format(hour)}:${format(minute)}am`;

// future time in ms

const futureTime = futureDate.getTime();


function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array

  const values = [days, hours, minutes, seconds];

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  })
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry , this giveaway has expired</h4>`
  }
}
let countdown = setInterval(getRemainingTime,1000); 
getRemainingTime();

function format(item) {
  if(item < 10) {
    item = `0${item}`
  }
  return item
}