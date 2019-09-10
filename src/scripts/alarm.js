let backgroundImage = document.querySelector("bg-image");
let timePicker = document.getElementById('time-picker');
let alarmSound = new Audio('../../assets/audio/alarm-sound.mp3');

// Set text when user inputs the alarm time
const setTime = e => {
  let timeText = document.getElementById('time-text');
  let value = e.target.value;
  console.log(value)
  timeText.innerHTML = value;
}
timePicker.addEventListener('input', setTime);

const soundTheAlarm = (time) => {
  let d = new Date();
  let current = `${addZero(d.getHours())}:${addZero(d.getMinutes())}:${addZero(d.getSeconds())}`
  
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
  }
}

const addZero = (num) => {
  // ac.padzero() : support function - pads hr, min, sec with 0 if <10
  if (num < 10) { num = "0" + num; }
  else { num = num.toString(); }
  return num;
}

// Keep this here for debugging alarm sound
console.log(soundTheAlarm("17:01"))