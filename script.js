function login() {
  const name = document.getElementById("name").value.toLowerCase();
  const code = document.getElementById("code").value;

  if (name === "hername" && code === "secret") {
    window.location.href = "welcome.html";
  } else {
    document.getElementById("error").innerText =
      "Access denied. This heart isn’t public property 😌";
  }
}

function go(page) {
  window.location.href = page;
}

function answer() {
  alert("Noted 😏");
}

const loveNotes = [
  "System update: You are still my favorite human.",
  "Error 404: Stopped loving you not found.",
  "Data analysis complete. I choose you.",
  "Warning: You cause happiness overload."
];

function generateLove() {
  const note = loveNotes[Math.floor(Math.random() * loveNotes.length)];
  document.getElementById("loveText").innerText = note;
}
