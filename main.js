const clock = document.querySelector('.clock');
const clockDisplay = document.querySelector('.clock-display');
const progressBar = document.querySelector('.clock-progress-bar')

let isHovering = false;

clock.addEventListener('mouseover', function(){
  isHovering = true;
})

clock.addEventListener('mouseout', function(){
  isHovering = false;
})


function setDate() {
  const now = new Date();
  let hour, minutes, seconds;

  if(isHovering) {
    hour = ('0' + now.getHours().toString(16)).slice(-2);
    min = ('0' + now.getMinutes().toString(16)).slice(-2);
    seconds = ('0' + now.getSeconds().toString(16)).slice(-2);
  } else {
    hour = ('0' + now.getHours()).slice(-2);
    min = ('0' + now.getMinutes()).slice(-2);
    seconds = ('0' + now.getSeconds()).slice(-2);

  }

  let displayTime =  `${hour}:${min}:${seconds}`;
  clockDisplay.innerHTML = displayTime;
  // clock.style.backgroundColor = `#${hour}${min}${secon}`
  progressBar.style.width =  `${seconds/ 60 * 14}rem`;

var randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
clock.style.backgroundColor = randomColor}

setInterval(setDate, 1000);
