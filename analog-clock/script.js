let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");


function displayTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ms = date.getMilliseconds();

    let hrRotation = 30*h + m/2;
    let minRotation = 6*m;
    let secRotation = 6 * s + ms * 0.006;
    

    hr.style.transform = `rotate(${hrRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    sec.style.transform = `rotate(${secRotation}deg)`;
}

displayTime();
setInterval(displayTime, 100);