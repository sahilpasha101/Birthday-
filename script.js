// 🎵 Music Play Button
document.getElementById("playMusic").addEventListener("click", function() {
    document.getElementById("bgMusic").play();
});

// 🎂 Birthday Countdown Timer
const targetDate = new Date("March 20, 2025 00:00:00").getTime();
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML = `${days} days left!`;

    if (difference < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "🎂 Happy Birthday Amyrah! 🎂";
    }
}, 1000);

// 🎉 Confetti Effect
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];
for (let i = 0; i < 150; i++) {
    confettiParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 4 + 1
    });
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, false);
        ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
        ctx.fill();
    });

    confettiParticles.forEach((p) => {
        p.y += p.d;
        if (p.y > canvas.height) p.y = 0;
    });

    requestAnimationFrame(drawConfetti);
}

drawConfetti();