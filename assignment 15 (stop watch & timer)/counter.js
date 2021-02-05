var minText = +prompt('enter minutes between 0 to 59')
var secText = +prompt('enter a seconds between 0 to 59');
var msecText = +prompt('enter a milli seconds between 0 to 100')

var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var interval;

function timer() {
  msecText--;
  msec.innerHTML = msecText;
  if (msecText <= 1) {
    secText--;
    sec.innerHTML = secText;
    msecText = 100;
  }
   else if (secText <= 1) {
     minText--;
     min.innerHTML = minText;
     secText = 60;
     sec.innerHTML = secText;

  }
}

function start() {
  interval = setInterval(timer, 10);
  document.getElementById("startbtn").style.display = "none";
  x = document.getElementById("startbtn");
  y = document.getElementById("trybtn");
  if (x.style.display === "none") {
    y.style.display = "block";
  } else {
    x.style.display = "none";
  }

}
function stop() {
  clearInterval(interval);
  document.getElementById("stoptbtn").style.display = "none";
}
function reset() {
  minText = 0;
  secText = 0;
  msecText = 0;
  min.innerHTML = minText;
  sec.innerHTML = secText;
  msec.innerHTML = msecText;
  stop();
  document.getElementById("resetbtn").style.display = "none";
}
