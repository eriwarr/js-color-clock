var clock = document.getElementsByClassName('clock');
var clockDisplay = document.getElementsByClassName('clock-display');


setInterval(function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);



clockDisplay[0].innerHTML = hour + " : " + min + " : " + sec;

}, 1000)

function updateTime(t){
  if(t < 10){
    return "0" + t;
  } else {
    return t;
  }
}

var changeColor = setInterval(function() {
      for(let i = 0; i < clock.length; i++){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        clock[i].style.backgroundColor = "#" + randomColor + "";
        clockDisplay[0].addEventListener("mouseover", function() {
        clockDisplay[0].innerHTML = "#" + randomColor + "";
      })
      }
}, 2000)
