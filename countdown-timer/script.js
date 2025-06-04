const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const updateCountdown = (deadline) => {
    const currentDate = new Date();
    const timeDifference = (deadline - currentDate) / 1000; // Seconds

    const daysLeft = Math.floor(timeDifference / 3600 / 24);
    const hoursLeft = Math.floor(timeDifference / 3600) % 24;
    const minutesLeft = Math.floor(timeDifference / 60) % 60;
    const secondsLeft = Math.floor(timeDifference) % 60;

    const formatTime = (time) => {
        return time < 10 ? "0" + time : time;
    }

    days.innerHTML = formatTime(daysLeft);
    hours.innerHTML = formatTime(hoursLeft);
    minutes.innerHTML = formatTime(minutesLeft);
    seconds.innerHTML = formatTime(secondsLeft);
} 

const countDown = (targetDate) => {
    setInterval(() => updateCountdown(targetDate), 1000);
}

const targetDate = new Date("June 30 2025 23:59:59");
countDown(targetDate);
