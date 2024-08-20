document.getElementById('eventForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const eventDateTime = document.getElementById('eventDateTime').value;
    if (eventDateTime) {
        startCountdown(eventDateTime);
    }
});

function startCountdown(eventDateTime) {
    const countdownElement = document.querySelector('.countdown');
    countdownElement.style.display = 'block';

    function countdown() {
        const eventDate = new Date(eventDateTime).getTime();
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days + " Days";
        document.getElementById("hours").innerHTML = hours + " Hours";
        document.getElementById("minutes").innerHTML = minutes + " Minutes";
        document.getElementById("seconds").innerHTML = seconds + " Seconds";

        if (timeLeft < 0) {
            document.getElementById("timer").innerHTML = "Event has started!";
            clearInterval(interval);
        }
    }

    const interval = setInterval(countdown, 1000);
}