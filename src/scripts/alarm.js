let backgroundImage = document.querySelector("bg-image");
let timePicker = document.getElementById('time-picker');
let themePicker = document.getElementById('themeMenuButton');
let reset = document.querySelector('.snooze-button');
let alarmSound = new Audio('../../assets/audio/alarm-sound.mp3');
let chosenTheme = "Avocado";

// Set text when user inputs the alarm time
const setTime = e => {
  let timeText = document.getElementById('time-text');
  let value = e.target.value;
  console.log(value)
  timeText.innerHTML = value;
}
timePicker.addEventListener('input', setTime);

const soundTheAlarm = () => {
  let d = new Date();
  let current = `${addZero(d.getHours())}:${addZero(d.getMinutes())}:${addZero(d.getSeconds())}`
  
  let time = document.querySelector('input').value;
  let aTime = time.split(':');
  let a = new Date();
  a.setHours(Number(aTime[0]),Number(aTime[1]))
  let alarm = `${addZero(a.getHours())}:${addZero(a.getMinutes())}:${addZero(a.getSeconds())}`
  console.log(current,alarm);

  if(current === alarm){
    //sound the alarm
    alarmSound.loop = true;
    alarmSound.play();
    console.log("alarm")
    alarmBackground();
  }
}

setInterval(soundTheAlarm,1000);

const addZero = (num) => {
  // ac.padzero() : support function - pads hr, min, sec with 0 if <10
  if (num < 10) { num = "0" + num; }
  else { num = num.toString(); }
  return num;
}

// Keep this here for debugging alarm sound
console.log(soundTheAlarm("17:01"))




//Change the background
const changeBackground = (e) => {
  let bgImageStyle =  document.querySelector('.bg-image');
  let avocadoEl = document.getElementById('avocado');
  let monsterEl = document.getElementById('monster');
  let plantEl = document.getElementById('plant');
  let optionText = document.getElementById('themeButton');
  console.log(bgImageStyle)
  console.log(e.target.text);

  switch (e.target.text) {
    case "Avocado":
      monsterEl.classList.contains('active') ? monsterEl.classList.remove('active') : null;
      plantEl.classList.contains('active') ? plantEl.classList.remove('active') : null;
      console.log("value:", e.target.text);
      avocadoEl.classList.add('active');
      optionText.innerHTML = e.target.text;
      chosenTheme = "Avocado";
      break;
    case "Monster":
      avocadoEl.classList.contains('active') ? avocadoEl.classList.remove('active') : null 
      plantEl.classList.contains('active') ? plantEl.classList.remove('active') : null;
      console.log("value:", e.target.text);
      monsterEl.classList.add('active');
      optionText.innerHTML = e.target.text;
      chosenTheme = "Monster";
      break;
    case "Plant":
      avocadoEl.classList.contains('active') ? avocadoEl.classList.remove('active') : null 
      monsterEl.classList.contains('active') ? monsterEl.classList.remove('active') : null;
      console.log("value:", e.target.text);
      plantEl.classList.add('active');
      optionText.innerHTML = e.target.text;
      chosenTheme = "Plant";
      break;
    default:
      avocadoEl.classList.add('active')
      break;
  }
}
themePicker.addEventListener('click',changeBackground);

const alarmBackground = () => {
  let avocadoEl = document.getElementById('avocado-active');
  let monsterEl = document.getElementById('monster-active');
  let plantEl = document.getElementById('plant-active');

  switch (chosenTheme) {
    case "Avocado":
      document.getElementById('avocado').classList.remove('active');
      avocadoEl.classList.add('active');
      break;
    case "Monster":
      document.getElementById('monster').classList.remove('active');
      monsterEl.classList.add('active');
      break;
    case "Plant":
      document.getElementById('plant').classList.remove('active');
      plantEl.classList.add('active');
      break;
    default:
      document.querySelector('.alarm-ring').classList.add('active');
      document.querySelector('.title').classList.remove('active');
      document.querySelector('.settings-panel').classList.remove('active');
      document.querySelector('.snooze').classList.add('active');
      break;
  }
      document.querySelector('.alarm-ring').classList.add('active');
      document.querySelector('.title').classList.remove('active');
      document.querySelector('.settings-panel').classList.remove('active');
      document.querySelector('.snooze').classList.add('active');
}

const resetButton = () => {
  alarmSound.pause();
  timePicker.value = "00:00";
  document.getElementById('time-text').innerHTML = "00:00";
  document.querySelector('.alarm-ring').classList.remove('active');
  document.querySelector('.title').classList.add('active');
  document.querySelector('.settings-panel').classList.add('active');
  document.querySelector('.snooze').classList.remove('active');

  switch (chosenTheme) {
    case "Avocado":
        document.getElementById('avocado-active').classList.remove('active');
        document.getElementById('avocado').classList.add('active');
      break;
    case "Monster":
        document.getElementById('monster-active').classList.remove('active');
        document.getElementById('monster').classList.add('active');
        break;
    case "Plant":
        document.getElementById('plant-active').classList.remove('active');
        document.getElementById('plant').classList.add('active');
    default:
      break;
  }
}
reset.addEventListener('click', resetButton);
