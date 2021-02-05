var minText = 0;
var secText = 0;
var msecText = 0;

var min = document.getElementById("min");
var sec = document.getElementById("sec");
var msec = document.getElementById("msec");
var interval;

function timer() {
  msecText++;
  msec.innerHTML = msecText;
  if (msecText >= 100) {
    secText++;
    sec.innerHTML = secText;
    msecText = 0;
  } else if (sec >= 60) {
    minText++;
    min.innerHTML = minText;
    secText = 0;
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

// var btn = document.querySelectorAll("btn");
// btn.addEventListener("click", function () {
//   document.querySelectorAll("btn").style.display = "none";
// });
