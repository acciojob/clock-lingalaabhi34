function updateclock(){
const timer = document.getElementById("timer");
const now = new Date();
const date = now.DateString();
const time = now.toLocaleTimeString();
timer.textContent = `${date},${time}`;
}
updateclock();
setInterval(updateclock,100000);