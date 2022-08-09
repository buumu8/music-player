const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Check if playing
let isPlaying = false;
// Play
function playSong() {
  music.play();
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "pause");
  isPlaying = true;
}

// Pause
function pauseSong() {
  music.pause();
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "play");
  isPlaying = false;
}

// Play or pause event listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
