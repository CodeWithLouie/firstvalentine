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

// =======================
// LOVE QUIZ LOGIC (10 QUESTIONS)
// =======================

const quizData = [
  {
    q: "Who fell first?",
    options: ["You 😏", "Me 😌"],
    answer: 0
  },
  {
    q: "Our love language?",
    options: ["Food 🍕", "Quality Time ❤️"],
    answer: 1
  },
  {
    q: "Who is always late?",
    options: ["You 😅", "Me 😬"],
    answer: 0
  },
  {
    q: "Best kind of date?",
    options: ["Movie night 🎬", "Talking till midnight 🌙"],
    answer: 1
  },
  {
    q: "Who steals food?",
    options: ["You 👀", "Me 🙃"],
    answer: 0
  },
  {
    q: "Who is more stubborn?",
    options: ["You 😤", "Me 🤐"],
    answer: 0
  },
  {
    q: "Our vibe together?",
    options: ["Soft & Sweet 💕", "Chaos but cute 😈"],
    answer: 1
  },
  {
    q: "Who says 'I miss you' more?",
    options: ["You 🥺", "Me 🥰"],
    answer: 1
  },
  {
    q: "Our perfect evening?",
    options: ["Movies & snacks 🍿", "Just us talking ❤️"],
    answer: 1
  },
  {
    q: "Would you choose me again?",
    options: ["Always 💖", "Every lifetime ♾️"],
    answer: 1
  }
];

let currentQ = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreText = document.getElementById("scoreText");

function loadQuestion() {
  const current = quizData[currentQ];
  questionEl.innerText = `Q${currentQ + 1}. ${current.q}`;
  optionsEl.innerHTML = "";
  feedbackEl.innerText = "";
  nextBtn.style.display = "none";

  current.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = quizData[currentQ].answer;

  if (selected === correct) {
    score++;
    feedbackEl.innerText = "Correct 😏 You know us well ❤️";
  } else {
    feedbackEl.innerText = "Hmm… interesting choice 😂";
  }

  // Disable buttons after answer
  Array.from(optionsEl.children).forEach(btn => btn.disabled = true);

  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQ++;
  if (currentQ < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  feedbackEl.style.display = "none";
  nextBtn.style.display = "none";

  resultEl.style.display = "block";

  let message = "";
  if (score >= 8) {
    message = "Elite Partner Level 💎";
  } else if (score >= 6) {
    message = "Certified Lover 😌";
  } else {
    message = "Still Passed… because I like you ❤️";
  }

  scoreText.innerText =
    `You scored ${score} / 10 🎉\n${message}`;
}

// Auto-load when page opens
if (questionEl) {
  loadQuestion();
}

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

