// LOGIN
function login() {
  const name = document.getElementById("name").value.toLowerCase();
  const code = document.getElementById("code").value;

  if (name === "hername" && code === "secret") {
    launchConfetti();
    setTimeout(() => {
      window.location.href = "welcome.html";
    }, 1200);
  } else {
    document.getElementById("error").innerText =
      "Access denied. This heart isn’t public property 😌";
  }
}

// NAVIGATION
function go(page) {
  window.location.href = page;
}

// QUIZ
function answer() {
  alert("Noted 😏");
}

// LOVE GENERATOR
const loveNotes = [
  "System update: You are still my favorite human.",
  "Error 404: Tried to stop loving you. Failed.",
  "Data analysis complete. I choose you.",
  "Warning: Prolonged exposure to you causes happiness."
];

function generateLove() {
  document.getElementById("loveText").innerText =
    loveNotes[Math.floor(Math.random() * loveNotes.length)];
}

// MUSIC
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (!music) return;
  music.paused ? music.play() : music.pause();
}

// FLOATING HEARTS
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 800);

// CONFETTI
function launchConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = "💖";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.animation = "floatDown 2s ease-out forwards";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
}

// RUNNING NO BUTTON
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
}
function moveNo() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "vw";
  noBtn.style.top = Math.random() * 70 + "vh";
}

// COUNTDOWN TIMER
const countdownEl = document.getElementById("countdown");
if (countdownEl) {
  const eventDate = new Date(2026, 1, 14, 19, 0).getTime(); // Feb 14, 7pm

  setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      countdownEl.innerText = "It’s date time ❤️";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    countdownEl.innerText = `${d}d ${h}h ${m}m ${s}s`;
  }, 1000);
}
