const dayDisplayElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentDate = new Date();

const dayIndex = currentDate.getDay();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = daysOfWeek[dayIndex];

dayDisplayElement.textContent = currentDay;

const timeDisplayElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);
const myDate = new Date();
const hours = myDate.getHours();

const minutes = myDate.getMinutes();

const myTime = hours + " " + " : " + minutes + " : " + myDate.getMilliseconds();

timeDisplayElement.textContent = myTime;
console.log(myTime);
